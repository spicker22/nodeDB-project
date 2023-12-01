// Doctor data
let DOCTORS_DATA = [
    { id: 0, DoctorsName: 'Dr. Smith', years: 20, address: '10076 Turquoise' },
    { id: 1, DoctorsName: 'Dr. Johnson', years: 23, address: '10074 Turquoise' },
    { id: 2, DoctorsName: 'Dr. Davis', years: 25, address: '10072 Turquoise' },
    { id: 3, DoctorsName: 'Dr. Anderson', years: 34, address: '10072 Turquoise' },
  ];

// Global ID
  let globalId = 4

// handlerFunctions defined
const handlerFunctions = {

    // getDoctor function(GET)
    getDoctors: (req, res) => {
        res.send(DOCTORS_DATA)
    },

    // addDoctor function(POST)
    addDoctor: (req, res) => {
        const {DoctorsName, years, address } = req.body;
        const newRow = {
         id: globalId, 
         DoctorsName: DoctorsName,
         years: years,
         address: address
        }
 
        DOCTORS_DATA.push(newRow)
        globalId++
        res.send(DOCTORS_DATA)
     },

     // deleteDoctor function(DELETE)
     deleteDoctor: (req, res) => {
        const {id} = req.params
        const filteredData = DOCTORS_DATA.filter((el) => el.id !== +id )           // The '+' infront of the id creates a num. If you dont do this, might compare string to a number.
        DOCTORS_DATA = filteredData
        res.send(DOCTORS_DATA)
    },

    // editDoctor function (PUT)
    editDoctor: (req, res) => {
        // get id param
        const {id} = req.params

        // get descritpion, rate, hours from body object
        const {DoctorsName, years, address } = req.body;
        
        // find object to change
        const editDoctor = DOCTORS_DATA.find((job) => job.id === +id)

        // change object
        editDoctor.DoctorsName = DoctorsName
        editDoctor.years = years
        editDoctor.address = address
        res.send(DOCTORS_DATA)
    }

}

export default handlerFunctions
