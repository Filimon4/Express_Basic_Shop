import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Телефоны"},
            {id: 2, name: "Ноутбуки"},
            {id: 3, name: "Планшеты"},
            {id: 4, name: "Компьютеры"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
        ]
        this._devices = [
            {id: 1, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 2, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 3, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 4, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 5, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 6, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 7, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 8, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 9, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 10, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 11, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
            {id: 12, name: "A73", price: 20000, rating: 5, img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/020c493380f782f457541a1a89b838e9/05e2397a951dbb9a25a5b09732d2d4db0cee7cd43e54cb215160462029aa25ae.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(bool) {
        this._isAuth = bool;
    }

    setBrands(user) {
        this._user = user;
    }

    setDevices(user) {
        this._user = user;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}