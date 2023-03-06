/* 
Assignments 3/2/2023

Data Dump Formatting -

  You have been given a raw data dump that is structured as an array of objects. The object's keys are companies, and the values are arrays of emails followed by a 3 digit department number. I need you to write a program that will go through the data, print the emails for each company and what department number that email belongs to. The format could look something like:


  Company One
  email: email@email.com, dept: 123
  email: email@email.com, dept: 123

  Company Two
  email: email@email.com, dept: 123
  email: email@email.com, dept: 123

  */

  const data = [
    { "Google": ["test@test.com 123", "test@test.com 321", "test@test.com 451", "test@test.com 123" ]},
    { "Yahoo": ["test@test.com 123", "test@test.com 321", "test@test.com 451", "test@test.com 451" ]},
    { "IBM": ["test@test.com 888", "test@test.com 123", "test@test.com 888", "test@test.com 123" ]},
    { "GREGS": ["test@test.com 123", "test@test.com 888", "test@test.com 123", "test@test.com 123" ]},
    { "AUTO SHOP": ["test@test.com 888", "test@test.com 555", "test@test.com 555", "test@test.com 123" ]},
    { "PAWN SHOP": ["test@test.com 123", "test@test.com 123", "test@test.com 123", "test@test.com 123" ]},
    { "Nike": ["test@test.com 123", "test@test.com 123", "test@test.com 555", "test@test.com 123" ]},
    { "Franks": ["test@test.com 123", "test@test.com 888", "test@test.com 555", "test@test.com 123" ]},
    { "Tims": ["test@test.com 123", "test@test.com 123", "test@test.com 888", "test@test.com 123" ]},
    { "Apple": ["test@test.com 123", "test@test.com 555", "test@test.com 123", "test@test.com 123" ]},
    { "Sony": ["test@test.com 123", "test@test.com 123", "test@test.com 123", "test@test.com 123" ]},
    { "Disney": ["test@test.com 123", "test@test.com 888", "test@test.com 123", "test@test.com 123" ]},
    { "Popies": ["test@test.com 123", "test@test.com 123", "test@test.com 123", "test@test.com 123" ]},
    { "Sally": ["test@test.com 123", "test@test.com 555", "test@test.com 888", "test@test.com 123" ]},
    { "Henry": ["test@test.com 123", "test@test.com 555", "test@test.com 555", "test@test.com 555" ]},
    { "Dave's": ["test@test.com 123", "test@test.com 888", "test@test.com 555", "test@test.com 123" ]}
    ]



    // function dataDrop(data) {
    //   data.forEach(e =>console.log(e.map(j => console.log(j))))
    // }

    // dataDrop(data)
    // const firstCompany = data[0]
    // const compName = String(Object.keys(firstCompany))
    
    // const content = Object.values(firstCompany)
    
    // // const company = data.forEach(e => console.log(`company: ${Object.keys(e)}`))

    // function company() {
    //   data.forEach(e => console.log(`company: ${Object.keys(e)}`))
    // }

    // console.log(company())


    // console.log(typeof content)
    // console.log(content)
    
    // data.forEach(e => console.log(Object.keys(e)))
    // data.forEach(e => console.log(Object.values(e)))
    data.forEach(e => console.log(`Company: ${Object.keys(e)}\nEmail: ${Object.values(e).forEach(values => values.forEach(j => console.log(j.split(" "))))} `))
    // data.map(e => console.log(`Company: ${Object.keys(e)}\nEmail: ${Object.values(e).map(j => console.log(typeof j)}`))
    
    // console.log(compName)
    // console.log(content)


  // data.forEach(x => console.log(x.value))