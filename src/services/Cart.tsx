import SInfo from 'react-native-sensitive-info';
import Item from '../entities/Product';

export default class Cart {
    constructor() {
    }

    public async getAllItems(): Promise<Object> {
        let res = []
        res = await SInfo.getAllItems({
            sharedPreferencesName: 'rsPrefs',
            keychainService: 'rsKeychain'
        }).then(values => {
            return values;
        });
        return res;
    }

    public addToCart(i: Item) {
        SInfo.setItem(i.Id, JSON.stringify(i), {
            sharedPreferencesName: 'rsSharedPrefs',
            keychainService: 'rsKeychain',
            encrypt: true
        });
    }

    public async deleteFromCart(key: Item): Promise<boolean> {
        SInfo.deleteItem(key.Id, {
            sharedPreferencesName: 'rsSharedPrefs',
            keychainService: 'rsKeychain'
        });
        return true;
    }
}