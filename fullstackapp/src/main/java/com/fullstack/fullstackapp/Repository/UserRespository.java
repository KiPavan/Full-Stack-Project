package com.fullstack.fullstackapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.fullstackapp.Model.User;


public interface UserRespository extends JpaRepository<User,Long>{

}
