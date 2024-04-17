import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        vans: Model,
        users: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123" })
        server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" })
        server.create("van", { id: "4", name: "DUET Point", price: 0, description: "Hop aboard our charmingly \"vintage\" fleet and enjoy a scenic (and slightly bumpy) ride to class. Don't worry, these classics may be older than your textbooks, but they'll (probably) get you there safely. Just remember, these vehicles pre-date airbags, so defensive driving is key!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "rugged", hostId: "789" })
        server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "simple", hostId: "123" })
        server.create("van", { id: "7", name: " The Horizon Chaser", price: 100, description: "This meticulously crafted caravan boasts sleek, modern design with panoramic windows that blur the line between the indoors and the breathtaking landscapes around you. The Horizon Chaser is your luxurious escape on wheels, perfectly suited for couples or small families seeking an unforgettable adventure.", imageUrl: "https://images.unsplash.com/photo-1572368834884-8f400ca7d147?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "simple"})
        server.create("van", { id: "8", name: "The Wandering Star", price: 200, description: " This cozy yet spacious caravan is perfect for solo travelers or friends seeking an intimate escape. Relax in the comfortable seating area that converts to a queen-size bed, cook delicious meals in the well-appointed kitchenette, and enjoy the views from the large sliding door that opens onto a private patio. The Wandering Star offers everything you need for a rejuvenating solo adventure or a fun getaway with a friend.", imageUrl: "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "luxury" })
        server.create("van", { id: "9", name: "The Silver Nomad", price: 170, description: "This luxurious caravan caters to adventurous families with its spacious interior and high-end amenities. The Silver Nomad provides the perfect blend of comfort and adventure for an unforgettable family vacation.", imageUrl: "https://images.unsplash.com/photo-1596470693312-9a3686a0af0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "luxury" })
        server.create("user", { id: "123", email: "host@vanlife.com", password: "vanlife456", name: "Bob" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/vans", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})