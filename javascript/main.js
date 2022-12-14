// stock con array de objetos
let stock = [
    {brand: "Stark", model: "Thunder", color: "🔴 Roja", category: "⛰️ MTB", price: 80000},
    {brand: "Stark", model: "Fusion", color: "🟣 Violeta", category: "⛱️ Beach", price: 120000},
    {brand: "Stark", model: "Duster", color: "⚫ Negra", category: "🏙️ Urban", price: 105000},
    {brand: "Newton", model: "Gina", color: "🟣 Violeta", category: "⛱️ Beach", price: 115000},
    {brand: "Newton", model: "Elena", color: "🟠 Naranja", category: "🏙️ Urban", price: 85000},
    {brand: "Philco", model: "Toscana", color: "🟡 Amarilla", category: "🏞️ Ride", price: 90000},
    {brand: "Philco", model: "Battle", color: "⚫ Negra", category: "⛰️ MTB", price: 135000},
    {brand: "SBK", model: "Kansas", color: "⚫ Negra", category: "🏞️ Ride", price: 125000},
    {brand: "SBK", model: "Chicago", color: "🟢 Verde", category: "🏙️ Urban", price: 105000},
    {brand: "SBK", model: "Nevada", color: "🔵 Azul", category: "⛰️ MTB", price: 115000}
]

// variables con filtros de búsqueda
let filterPrice = "• 01 → por Precio"
let filterModel = "• 02 → por Modelo"
let filterCategory = "• 03 → por Categoría"

// pedido de tipo de filtro
let filter = parseInt(prompt("Bienvenido a 🚲 BICICLETERÍA SCARANO 🚲\n\nPor favor, indique que como desea realizar su búsqueda de bicicleta:\n\n" + filterPrice + "\n" + filterModel  + "\n" + filterCategory));
console.log(filter)

// aplicación de filtros
if (filter === 1) { // filtro por precio, se usará "filter", para filtrar los rangos     
    let amount = parseInt(prompt("Su búsqueda será: " + filterPrice + "\n\nIndique el rango deseado:\n• 01 - $50.000 a $100.000 \n• 02 - $100.000 a $200.000")); 
    console.log(amount)    
    if (amount === 1) {         
        let byPrice = stock.filter(bicycle => bicycle.price < 100000)
        let message = "Los modelos disponibles en ese rango son: \n\n"
        for (const bicycle of byPrice) {
            message = message + "• Bicicleta '" + bicycle.brand + " " + bicycle.model.toUpperCase() + "' " + bicycle.color.toLowerCase() + " - " + bicycle.category + " a $" + bicycle.price + "\n"
        }
    console.log(byPrice);
    alert(message); 
    }else if (amount === 2){               
        let byPrice = stock.filter(bicycle => bicycle.price > 100000)
        let message = "Los modelos disponibles en ese rango son: \n\n"
        for (const bicycle of byPrice) {
            message = message + "• Bicicleta '" + bicycle.brand + " " + bicycle.model.toUpperCase() + "' " + bicycle.color.toLowerCase() + " - " + bicycle.category + " a $" + bicycle.price + "\n"
        }    
    console.log(byPrice);
    alert(message);
    }else{
        alert("Por favor, presione ESC para volver a las opciones.")
        console.log("Por favor, presione ESC para volver a las opciones.")
    }
}else if (filter === 2) { // filtro por modelo, se usará "find", por ser un valor único que no se repite     
    let byModel = prompt("Su búsqueda será: " + filterModel + "\n\nIndique el modelo de bicicleta que desea encontrar:");
    console.log(byModel)
    // modelos disponibles para probar en prompt: Thunder, Fusion, Duster, Gina, Elena, Toscana, Battle, Kansas, Chicago y Nevada
    if (modelSearch = stock.find(bicycle => bicycle.model.trim().toUpperCase() === byModel.trim().toUpperCase())){
        alert("• El modelo '" + modelSearch.brand + " " + byModel.trim().toUpperCase() + "' " + modelSearch.color + " - " + modelSearch.category + " a $" + modelSearch.price + " está disponible.\n")  
        console.log(modelSearch)       
    }else{
        alert("El modelo '" + byModel.trim().toUpperCase() + "' no está disponible")
    }
}else if (filter === 3) {  
    let message = ""
    console.log(message)
    stock.forEach(bicycle => {
        message = message + " " + bicycle.category + " - '" + bicycle.brand + " " + bicycle.model.toUpperCase() + "'\n"
        })
    alert ("• Los modelos por categoría son:\n\n" + message)
}else{ // si poné otro número en el inicio     
    alert("Por favor, presione ESC para volver a las opciones.")
    console.log("Por favor, presione ESC para volver a las opciones.")
} 