"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EconomyShop = void 0;
const event_1 = require("bdsx/event");
const src_1 = require("./src");
const sell_1 = require("./src/sell");
const translate_1 = require("./src/utils/translate");
var EconomyShop;
(function (EconomyShop) {
    EconomyShop.sell = sell_1.SellMain;
    EconomyShop.shop = src_1.ShopMain;
    EconomyShop.form = src_1.ShopForm;
})(EconomyShop || (exports.EconomyShop = EconomyShop = {}));
event_1.events.serverOpen.on(() => {
    require("./src");
    require("./src/sell");
    require("./src/commands");
    translate_1.send.success("Started!");
});
event_1.events.serverClose.on(() => {
    sell_1.SellMain.save(true);
    src_1.ShopMain.save(true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0M7QUFDcEMsK0JBQTJDO0FBQzNDLHFDQUFzQztBQUN0QyxxREFBNkM7QUFFN0MsSUFBaUIsV0FBVyxDQUkzQjtBQUpELFdBQWlCLFdBQVc7SUFDWCxnQkFBSSxHQUFHLGVBQVEsQ0FBQztJQUNoQixnQkFBSSxHQUFHLGNBQVEsQ0FBQztJQUNoQixnQkFBSSxHQUFHLGNBQVEsQ0FBQztBQUNqQyxDQUFDLEVBSmdCLFdBQVcsMkJBQVgsV0FBVyxRQUkzQjtBQUVELGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFCLGdCQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO0lBQ3ZCLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsY0FBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQyJ9