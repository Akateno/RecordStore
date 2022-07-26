# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Deleting data"
Review.destroy_all
Record.destroy_all 
puts "🌱 Planting Record Store..."



r1 = Record.create(name: "Carrie & Lowell", artist:"Sufjan Stevens", release_date: 2015, image:"https://m.media-amazon.com/images/I/81opDuEYnGL._SY355_.jpg" )
r2 = Record.create(name: "Chip Chrome & The Mono-Tones", artist:"The Neighbourhood", release_date: 2020, image:"https://m.media-amazon.com/images/I/61KqonKUtKL._SY355_.jpg" )
r3 = Record.create(name: "Lemonade", artist:"Beyonce", release_date: 2017, image:"https://m.media-amazon.com/images/I/910OY-+zCaL._SY355_.jpg" )
r4 = Record.create(name: "Abbey Road Aniversary ", artist:"The Beatles", release_date: 2019, image:"https://m.media-amazon.com/images/I/81dUVKQDBEL._SY355_.jpg" )
r5 = Record.create(name: "folklore ", artist:"Taylor Swift", release_date: 2021, image:"https://m.media-amazon.com/images/I/91PYDrG2ejL._SY355_.jpg" )
r6 = Record.create(name: "Golden Hour ", artist:"Kacey Musgraves", release_date: 2021, image:"https://m.media-amazon.com/images/I/91KBmUeHXML._SX355_.jpg" )
r7 = Record.create(name: "Random Access Memories ", artist:"Daft Punk", release_date: 2013, image:"https://m.media-amazon.com/images/I/61Ia07wdZQL._SY355_.jpg" )
r8 = Record.create(name: "To Pimp A Butterfly", artist:"Kendrik Lamar", release_date: 2015, image:"https://m.media-amazon.com/images/I/71NUQhdZDJL._SY355_.jpg" )
r9 = Record.create(name: "X&Y", artist:"Coldplay", release_date: 2006, image:"https://m.media-amazon.com/images/I/71SZonv3+9L._SY355_.jpg" )
r10 = Record.create(name: "Dopamine", artist:"BORNS", release_date: 2015, image:"https://m.media-amazon.com/images/I/81mSng4+k7L._SY355_.jpg" )










r1= Review.create(date: Date.parse("Dec 8 2013"), comment:"Pretty Good", score: rand(1..10),  record_id:Record.ids.sample)
r2= Review.create(date: Date.parse("Jan 7 2018"), comment: "Not so good ", score: rand(1..10),  record_id:Record.ids.sample)
r3= Review.create(date: Date.parse("Jan 12 2019"), comment: "My Favorite!!", score: rand(1..10),  record_id:Record.ids.sample)
r4= Review.create(date: Date.parse("Feb 25 2011"), comment: "A good Listen", score: rand(1..10), record_id:Record.ids.sample)
r5= Review.create(date: Date.parse("Dec 9 2011"), comment:"Mid", score: rand(1..10),  record_id:Record.ids.sample)
r6= Review.create(date: Date.parse("Jun 4 2015"), comment:"Its ok", score: rand(1..10),  record_id:Record.ids.sample)
r7= Review.create(date: Date.parse("Jul 6 2017"), comment:"Could be better", score: rand(1..10),  record_id:Record.ids.sample)
r8= Review.create(date: Date.parse("Aug 16 2012"), comment:"Nice", score: rand(1..10),  record_id:Record.ids.sample)
r9= Review.create(date: Date.parse("Oct 19 2013"), comment:"Dope", score: rand(1..10),  record_id:Record.ids.sample)
r10= Review.create(date: Date.parse("Sep 22 2017"), comment:"SUPER GOOD", score: rand(1..10),  record_id:Record.ids.sample)
r11= Review.create(date: Date.parse("Nov 21 2019"), comment:"ok?", score: rand(1..10),  record_id:Record.ids.sample)
r12= Review.create(date: Date.parse("Dec 11 2011"), comment:"Cant wait for the next one", score: rand(1..10),  record_id:Record.ids.sample)
r13= Review.create(date: Date.parse("Feb 8 2014"), comment:"Not bad", score: rand(1..10),  record_id:Record.ids.sample)
r14= Review.create(date: Date.parse("Oct 4 2011"), comment:"Hate it", score: rand(1..10),  record_id:Record.ids.sample)
r15= Review.create(date: Date.parse("Mar 4 2012"), comment:"pretty bad ngl", score: rand(1..10),  record_id:Record.ids.sample)
r16= Review.create(date: Date.parse("Mar 2 2011"), comment:"Certified BOP", score: rand(1..10),  record_id:Record.ids.sample)
r17= Review.create(date: Date.parse("Feb 9 2012"), comment:"Noice", score: rand(1..10),  record_id:Record.ids.sample)
r18= Review.create(date: Date.parse("Jun 1 2016"), comment:"Bad all around", score: rand(1..10),  record_id:Record.ids.sample)
r19= Review.create(date: Date.parse("Nov 25 2019"), comment:"I like it", score: rand(1..10),  record_id:Record.ids.sample)
r20= Review.create(date: Date.parse("Apr 1 2011"), comment:"yes", score: rand(1..10),  record_id:Record.ids.sample)




 
puts "✅ Done seeding!"