package com.example.demo.repository;

import com.example.demo.models.ERole;
import com.example.demo.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role,String> {
    Optional<Role> findByName(ERole name);
}
