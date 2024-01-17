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
const cartContainer = document.querySelector('.cart__container')
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
		sectionProducts.appendChild(productWrapper)
	})
}

renderProducts()

const addButtons = document.querySelectorAll('.add-btn')

const addToCart = (productName, productPrice) => {
	console.log(`Added a ${productName} to your cart at a price ${productPrice} PLN`);

	const existingProduct = cart.find(product => product.name === productName)

	if (existingProduct) {
		existingProduct.amount += 1
		existingProduct.total += existingProduct.price
	} else {
		const newProduct = {
			name: productName,
			total: productPrice,
			price: productPrice,
			amount: 1,
		}

		cart.push(newProduct)
	}

	console.log(cart)
	renderCart()
}

const increaseAmount = productName => {
	const existingProduct = cart.find(product => product.name === productName)

	if (existingProduct) {
		existingProduct.amount += 1
		existingProduct.total += existingProduct.price
	} 

	renderCart()
}
const decreaseAmount = productName => {
	const existingProduct = cart.find(product => product.name === productName)

	if (existingProduct.amount > 1) {
		existingProduct.amount -= 1
		existingProduct.total -= existingProduct.price
	} else {
		cart.splice(existingProduct, 1)
	}

	renderCart()
}
const deleteAmount = productName => {
	const existingProduct = cart.find(product => product.name === productName)

	if (existingProduct !== -1) {
		cart.splice(existingProduct, 1)
		
	} 

	renderCart()
}





const renderCart = () => {

	cartContainer.innerHTML = ''

	cart.forEach(product => {
		const newItem = document.createElement('div')
		newItem.classList.add('cart__item')

		const itemName = document.createElement('p')
		itemName.classList.add('cart__item-name')
		itemName.textContent = product.name

		const itemAmount = document.createElement('p')
		itemAmount.classList.add('cart__item-amount')
		itemAmount.textContent = `Amount: ${product.amount}`

		const itemPrice = document.createElement('p')
		itemPrice.classList.add('cart__item-price')
		itemPrice.textContent = `Price: ${product.total.toFixed(2)} PLN`

		const increaseBtn = document.createElement('button')
		increaseBtn.classList.add('increase-button', 'cart-button')
		const faPlus = document.createElement('i')
		faPlus.classList.add('fa-solid', 'fa-plus')
		increaseBtn.appendChild(faPlus)
		increaseBtn.addEventListener('click', () => increaseAmount(product.name))

		const decreaseBtn = document.createElement('button')
		decreaseBtn.classList.add('decrease-button', 'cart-button')
		const faMinus = document.createElement('i')
		faMinus.classList.add('fa-solid', 'fa-minus')
		decreaseBtn.appendChild(faMinus)
		decreaseBtn.addEventListener('click', () => decreaseAmount(product.name))

		const deleteBtn = document.createElement('button')
		deleteBtn.classList.add('delete-button', 'cart-button')
		const faXmark = document.createElement('i')
		faXmark.classList.add('fa-solid', 'fa-xmark')
		deleteBtn.appendChild(faXmark)
		deleteBtn.addEventListener('click', () => deleteAmount(product.name))


		cartContainer.appendChild(newItem)
		newItem.appendChild(itemName)
		newItem.appendChild(itemAmount)
		newItem.appendChild(itemPrice)
		newItem.appendChild(increaseBtn)
		newItem.appendChild(decreaseBtn)
		newItem.appendChild(deleteBtn)
	})

}





addButtons.forEach((addBtn, index) => {
	addBtn.addEventListener('click', () => {
		const selectedProduct = products[index]
		const productName = selectedProduct.name
		const productPrice = selectedProduct.price
		addToCart(productName, productPrice)
	})
})
