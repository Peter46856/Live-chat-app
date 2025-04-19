import { useState } from 'react';

//import femaleprofile from './assets/profile1.png';
const Matches = () => {
    const [users, setUsers] = useState([{
        
            id: 1,
            name: "John Doe",
            age: 30,
            location: "New York",
            seeking: "Friendship",
            active: "Yes"
        },

        {
            id: 2,
            name: "Jane Smith",
            age: 25,
            location: "Los Angeles",
            seeking: "Relationship",
            active: "No"
        },

        {
            id: 3,
            name: "Michael Johnson",
            age: 40,
            location: "Chicago",
            seeking: "Casual Dating",
            active: "Yes"
        },

        {
            id: 4,
            name: "Emily Davis",
            age: 35,
            location: "Houston",
            seeking: "Networking",
            active: "Yes"
        },

        {
            id: 5,
            name: "Chris Wilson",
            age: 28,
            location: "San Francisco",
            seeking: "Activity Partner",
            active: "No"
        },

        {
            id: 6,
            name: "Sarah Taylor",
            age: 33,
            location: "Miami",
            seeking: "Long-term Relationship",
            active: "Yes"
        },

        {
            id: 7,
            name: "Robert Brown",
            age: 45,
            location: "Seattle",
            seeking: "Friendship",
            active: "No"
        },

        {
            id: 8,
            name: "Amanda Martinez",
            age: 29,
            location: "Dallas",
            seeking: "Casual Dating",
            active: "Yes"
        },

        {
            id: 9,
            name: "Daniel Garcia",
            age: 32,
            location: "Atlanta",
            seeking: "Networking",
            active: "Yes"
        },

        {
            id: 10,
            name: "Olivia Rodriguez",
            age: 27,
            location: "Philadelphia",
            seeking: "Relationship",
            active: "No"
        },

        {
            id: 11,
            name: "James Lee",
            age: 38,
            location: "Boston",
            seeking: "Friendship",
            active: "Yes"
        },

        {
            id: 12,
            name: "Sophia Lopez",
            age: 31,
            location: "Denver",
            seeking: "Long-term Relationship",
            active: "Yes"
        },

        {
            id: 13,
            name: "William Scott",
            age: 37,
            location: "Phoenix",
            seeking: "Activity Partner",
            active: "No"
        },

        {
            id: 14,
            name: "Isabella Perez",
            age: 26,
            location: "Detroit",
            seeking: "Casual Dating",
            active: "Yes"
        },

        {
            id: 15,
            name: "Ethan Taylor",
            age: 34,
            location: "Portland",
            seeking: "Networking",
            active: "Yes"
        },

        {
            id: 16,
            name: "Mia Harris",
            age: 39,
            location: "San Diego",
            seeking: "Friendship",
            active: "No"
        },

        {
            id: 17,
            name: "Alexander Clark",
            age: 29,
            location: "Austin",
            seeking: "Relationship",
            active: "Yes"
        },

        {
            id: 18,
            name: "Natalie King",
            age: 36,
            location: "Minneapolis",
            seeking: "Long-term Relationship",
            active: "Yes"
        },

        {
            id: 19,
            name: "Liam Baker",
            age: 28,
            location: "Charlotte",
            seeking: "Activity Partner",
            active: "No"
        },

        {
            id: 20,
            name: "Ava Gonzales",
            age: 33,
            location: "Orlando",
            seeking: "Casual Dating",
            active: "Yes"
        },

        {
            id: 21,
            name: "Jackson Wright",
            age: 42,
            location: "San Antonio",
            seeking: "Networking",
            active: "Yes"
        },

        {
            id: 22,
            name: "Grace Young",
            age: 27,
            location: "Tampa",
            seeking: "Friendship",
            active: "No"
        },

        {
            id: 23,
            name: "Lucas Evans",
            age: 30,
            location: "Raleigh",
            seeking: "Relationship",
            active: "Yes"
        },

        {
            id: 24,
            name: "Chloe Flores",
            age: 35,
            location: "Nashville",
            seeking: "Long-term Relationship",
            active: "Yes"
        },

        {
            id: 25,
            name: "Benjamin Ward",
            age: 31,
            location: "Salt Lake City",
            seeking: "Activity Partner",
            active: "No"
        },

        {
            id: 26,
            name: "Emma Morgan",
            age: 29,
            location: "Kansas City",
            seeking: "Casual Dating",
            active: "Yes"
        },

        {
            id: 27,
            name: "Henry Bell",
            age: 36,
            location: "Indianapolis",
            seeking: "Networking",
            active: "Yes"
        },

        {
            id: 28,
            name: "Madison Cook",
            age: 28,
            location: "Columbus",
            seeking: "Friendship",
            active: "No"
        },

        {
            id: 29,
            name: "Gabriel Bailey",
            age: 34,
            location: "San Jose",
            seeking: "Relationship",
            active: "Yes"
        },

        {
            id: 30,
            name: "Sofia Richardson",
            age: 39,
            location: "Memphis",
            seeking: "Long-term Relationship",
            active: "Yes"
        },

        {
            id: 31,
            name: "David Cooper",
            age: 25,
            location: "Milwaukee",
            seeking: "Activity Partner",
            active: "No"
        },

        {
            id: 32,
            name: "Victoria Young",
            age: 32,
            location: "Oklahoma City",
            seeking: "Casual Dating",
            active: "Yes"
        },

        {
            id: 33,
            name: "Samuel Wright",
            age: 38,
            location: "Albuquerque",
            seeking: "Networking",
            active: "Yes"
        },

        {
            id: 34,
            name: "Elizabeth Martinez",
            age: 27,
            location: "Louisville",
            seeking: "Friendship",
            active: "No"
        },

        {
        
            id: 35,
            name: "Christopher Thompson",
            age: 30,
            location: "Las Vegas",
            seeking: "Relationship",
            active: "Yes"
        },

        {
            id: 36,
            name: "Jennifer Hernandez",
            age: 35,
            location: "Baltimore",
            seeking: "Long-term Relationship",
            active: "Yes"
        },

        {
            id: 37,
            name: "Matthew Allen",
            age: 29,
            location: "Portland",
            seeking: "Activity Partner",
            active: "No"
        },

        {
            id: 38,
            name: "Emma Carter",
            age: 33,
            location: "Jacksonville",
            seeking: "Casual Dating",
            active: "Yes"
        },

        {
            id: 39,
            name: "Nicholas King",
            age: 36,
            location: "San Francisco",
            seeking: "Networking",
            active: "Yes"
        },

        {
            id: 40,
            name: "Olivia White",
            age: 28,
            location: "New Orleans",
            seeking: "Friendship",
            active: "No"
        
    
   
    

    }])
    return (
        <main className="container">
            <div className="row justify-content-center mt-2 mb-3">
                <div className="col-8">
                    <div class="card-collection">
            {
                users.map((user) =>(
                    <div id={user.id} className="card m-2" style={{cursor: "pointer"}}>
                        <img src={"/profile"} className="card-img-top"/>
                        <div className="card-body" style={{ fontSize: "10px" }}>
                           <b>{user.name}</b><br></br>
                            {user.age}. {user.location}<br></br>
                            {user.seeking}<br></br>
                            {user.active}

                            
                        
                            
                           
                            
                        </div>

                    
                    
                    </div>
                ))
            }
            </div>
          </div>
          </div>
        </main>
    );
};

export default Matches;
