package com.fullstack.fullstackapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.fullstackapp.Exception.UserNotFoundException;
import com.fullstack.fullstackapp.Model.User;
import com.fullstack.fullstackapp.Repository.UserRespository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRespository userRespository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRespository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRespository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRespository.findById(id)
        .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser ,@PathVariable Long id){
        return  userRespository.findById(id)
        .map(user->{
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return userRespository.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }
    
    @DeleteMapping("/user/{id}")
    String deltingUser(@PathVariable Long id){
        if(!userRespository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRespository.deleteById(id);
        return "User with id "+id+" has been deleted Successfully";
    }
}
