package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface adminrepo extends JpaRepository<Admin, Integer>
{
	
	Optional<Admin> findById(int id);
}
