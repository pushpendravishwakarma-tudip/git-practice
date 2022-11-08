import {v4 as uuid} from "uuid";

let users =[
    {
        "name": "pushpendra",
        "email": "pushpendra@gmail.com",
        "contact": 8768768768,
        "id": "4778528f-cfb0-4c10-967c-ed7154b4d114"
    },{
        "name": "nilesh",
        "email": "nilesh@gmail.com",
        "contact": 8678977798,
        "id": "4778528f-cfb0-4c10-75938759837"
    },
    {
        "name": "suraj",
        "email": "suraj@gmail.com",
        "contact": 8678977798,
        "id": "4778528f-cfb0-4c10-967c-ed7154b4d114-589038"
    }
];

export const getUsers=(req, res)=>{
    res.send(users);
};

export const createUsers =(req,res)=>{

    const user=req.body;

    users.push({...user, id:uuid()});

    res.send("User Added Successfully");
};

export const getUser = (req, res)=>{
    const singleUser = users.filter((user)=>user.id===req.params.id);
    res.send(singleUser);
}

export const deleteUser = (req, res)=>{
     users = users.filter((user)=>user.id!==req.params.id);  
     res.send("user deleted successfully");
}

export const updateUser = (req, res)=>{
    const user = users.find((user)=>user.id===req.params.id);  
    
    user.name=req.body.name;
    user.email=req.body.email;
    user.contact=req.body.contact;

   res.send("user updated successfully");
}