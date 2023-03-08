package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Bus;
import com.example.demo.service.BusService;

@RestController
@CrossOrigin ("*")
public class BusController {
	@Autowired
	BusService service;
	@PostMapping("/bus")
	public String addBus(@RequestBody Bus bus) {
		return service.addBus(bus);
	}
	@GetMapping("/bus")
	public List<Bus> read(){
		return service.getBus();
	}
	@GetMapping("/bus/{id}")
	public Optional<Bus> getById(@PathVariable int id){
		return service.getBusById(id);
	}
	@PutMapping("/bus")
	public String update(@RequestBody Bus bus) {
		return service.updateBus(bus);
	}
	@DeleteMapping("/bus/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteBusById(id);
	}
	
}
