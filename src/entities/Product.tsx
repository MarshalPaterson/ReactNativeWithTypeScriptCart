export default class Product implements IProduct {
    constructor(public Id: string,
                public Product: string,
                public Category: string,
                public Name: string,
                public Image: string,
                public Price: string) {
    }
}