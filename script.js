//Open&Close Cart
const cartWrapper = document.querySelector('.cart')
const cartButton = document.querySelector('.open-btn')
const closeButton = document.querySelector('.cart__close')

const openCart = () => {
	cartWrapper.style.transform = 'translateX(0%)'
}

const closeCart = () => {
	cartWrapper.style.transform = 'translateX(100%)'
}

cartButton.addEventListener('click', openCart)
closeButton.addEventListener('click', closeCart)

//RenderProducts
const sectionProducts = document.querySelector('.products')
const cart = []
const products = [
	{
		src: '/images/headphones-1720164_640.jpg',
		name: 'Headphones',
		price: 100,
	},
	{
		src: '/images/background-white-4267347_640.jpg',
		name: 'Mouse',
		price: 50,
	},
	{
		src: '/images/fire-1368285_640.jpg',
		name: 'Candle',
		price: 10,
	},
	{
		src: '/images/pen-5146200_640.jpg',
		name: 'Pen',
		price: 5,
	},
	{
		src: '/images/shovel-1362944_640.jpg',
		name: 'Shovel',
		price: 60,
	},
	{
		src: '/images/doll-4061815_640.jpg',
		name: 'Doll',
		price: 20,
	},
]

const renderProducts = () => {
	products.forEach(product => {
		const productWrapper = document.createElement('div')
		productWrapper.classList.add('products__product')

		const productImage = document.createElement('img')
		productImage.classList.add('products__img')
		productImage.src = product.src

		const productName = document.createElement('p')
		productName.classList.add('products__name')
		productName.textContent = product.name
		productName.id = 'productName'

		const productPrice = document.createElement('p')
		productPrice.classList.add('products__price')
		productPrice.textContent = product.price
		productPrice.id = 'productPrice'

		const addBtn = document.createElement('button')
		addBtn.classList.add('add-btn')
		addBtn.textContent = 'Add to cart'

		productWrapper.appendChild(productImage)
		productWrapper.appendChild(productName)
		productWrapper.appendChild(productPrice)
		productWrapper.appendChild(addBtn)
		dupa = productWrapper
		sectionProducts.appendChild(productWrapper)
	})
}

renderProducts()


const addButtons = document.querySelectorAll('.add-btn')


const showProductInfo = (productName, productPrice) => {
	console.log(`Produkt: ${productName}, Cena: ${productPrice}`);
}

addButtons.forEach((addBtn, index) => {
	addBtn.addEventListener('click', () => {
		const selectedProduct = products[index]
		const productName = selectedProduct.name
		const productPrice = selectedProduct.price

		showProductInfo(productName,productPrice)
	})
})

