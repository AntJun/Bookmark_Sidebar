($ => {
    "use strict";

    $.ViewAmountHelper = function (b) {

        /**
         * Returns the view amounts of all bookmarks
         *
         * @returns {Promise}
         */
        this.getAll = () => {
            return new Promise((resolve) => {
                getClickCounter().then((clickCounter) => {
                    resolve({
                        viewAmounts: clickCounter,
                        counterStartDate: b.helper.model.getData("installationDate")
                    });
                });
            });
        };

        /**
         * Determines whether a bookmark to the given url exists and if so increases the view counter,
         * only if the tab was not previously opened or changed from the extension (these clicks are counted alreay)
         *
         * @param {object} opts
         * @returns {Promise}
         */
        this.addByUrl = (opts) => {
            return new Promise((resolve) => {
                const openedByExtension = b.helper.model.getData("openedByExtension");

                if (openedByExtension === null) { // page was not opened by extension -> view was not counted yet
                    b.helper.bookmarks.api.search({url: opts.url}).then((bookmarks) => {
                        bookmarks.some((bookmark) => {
                            if (bookmark.url === opts.url) {
                                this.addByEntry(bookmark);
                                return true;
                            }
                            return false;
                        });
                        resolve();
                    });
                }

                b.helper.model.setData("openedByExtension", null);
            });
        };

        /**
         * Increases the Click Counter of the given bookmark
         *
         * @param {object} bookmark
         */
        this.addByEntry = (bookmark) => {
            if (bookmark.id) {
                getClickCounter().then((clickCounter) => {
                    if (typeof clickCounter[bookmark.id] === "undefined" || typeof clickCounter[bookmark.id] !== "object") {
                        clickCounter[bookmark.id] = {c: 0};
                    }

                    clickCounter[bookmark.id].c++;
                    clickCounter[bookmark.id].d = +new Date();

                    $.api.storage.local.set({
                        clickCounter: clickCounter
                    });
                });
            }
        };

        /**
         * Retrieves infos about the views of the bookmarks
         *
         * @returns {Promise}
         */
        const getClickCounter = () => {
            return new Promise((resolve) => {
                $.api.storage.local.get(["clickCounter"], (obj) => {
                    let ret = {};

                    if (typeof obj.clickCounter !== "undefined") { // data available
                        ret = obj.clickCounter;
                    }

                    resolve(ret);
                });
            });
        };
    };

})(jsu);