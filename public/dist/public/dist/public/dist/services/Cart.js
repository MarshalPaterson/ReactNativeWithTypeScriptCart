"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_sensitive_info_1 = __importDefault(require("react-native-sensitive-info"));
class Cart {
    constructor() {
    }
    getAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = [];
            res = yield react_native_sensitive_info_1.default.getAllItems({
                sharedPreferencesName: 'rsPrefs',
                keychainService: 'rsKeychain'
            }).then(values => {
                return values;
            });
            return res;
        });
    }
    addToCart(i) {
        react_native_sensitive_info_1.default.setItem(i.Id, JSON.stringify(i), {
            sharedPreferencesName: 'rsSharedPrefs',
            keychainService: 'rsKeychain',
            encrypt: true
        });
    }
    deleteFromCart(key) {
        return __awaiter(this, void 0, void 0, function* () {
            react_native_sensitive_info_1.default.deleteItem(key.Id, {
                sharedPreferencesName: 'rsSharedPrefs',
                keychainService: 'rsKeychain'
            });
            return true;
        });
    }
}
exports.default = Cart;
//# sourceMappingURL=Cart.js.map