package com.example.demo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class MyController {

	@Autowired
	adminrepo admin;
	
	@Autowired
	ProductRepo productRepo;
	
	
	//update
	@RequestMapping("update{id}")
	public int update(@PathVariable int id) {
	    try {
	        // Fetch the Admin entity by ID
	        Product ad = productRepo.findById(id).orElse(null);
	        
	        if (ad != null) {
	            // You can update fields here if needed, e.g.:
	            // ad.setUsername("newUsername");
	            // ad.setPassword("newPassword");
	            
	            // Save the updated entity
	            productRepo.save(ad);
	            return 1;  // Update successful
	        } else {
	            return 0;  // Admin not found
	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	        return 0;  // Update failed due to an exception
	    }
	}

	
	
	
	@RequestMapping("alogin{username}and{password}")
	public int alogin(@PathVariable String username ,@PathVariable String password)
	{
		List<com.example.demo.Admin> list=admin.findAll();
		for(com.example.demo.Admin alogin:list)
		{
			if(alogin.getUsername().equals(username))
			{
				if(alogin.getPassword().equals(password))
				{
					return 1;
				}
				else
					
				{
					return 3;
				}
			}
		}
		return 2;
	}
	
	
	
	
//	addproduct
	@RequestMapping("read")
	public List<Product> read(){
		return productRepo.findAll();
	}
	

	
	@RequestMapping("add12{id}and{code}and{name}and{price}and{qnt}")
	public Product add(@PathVariable int id,@PathVariable int code,@PathVariable String name,@PathVariable int price,@PathVariable int qnt)
	{
		Product productRepo1=new Product(id,code,name,price,qnt);
		Product save=productRepo.save(productRepo1);
		return save;
	}
	
	@RequestMapping("delete{id}")
	public boolean delete(@PathVariable int id)
	{
		productRepo.deleteById(id);
		return true;
	}
	
	
	

}
