package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Bus;
import com.example.demo.repository.BusRepository;

@Service

public class BusService {
	@Autowired
	BusRepository repository;
	
	public String addBus(Bus bus) {
		repository.save(bus);
		return "Your Data Successfully Added !!!";
	}
	public List<Bus> getBus(){
		return repository.findAll();
	}
	public Optional<Bus> getBusById(int id){
		return repository.findById(id);
	}
	public String updateBus(Bus bus) {
		repository.save(bus);
		return "Your data Successfully Updated !!!";
		
	}
	public String deleteBusById(int id) {
		repository.deleteById(id);
		return "Your Data Successfully Erased !!!";
	}
	public List<Bus> sortBus(String field) {
		return repository.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	public List<Bus> paginateBus(int offset, int pageSize) {
		Page <Bus> page=repository.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}

	public List<Bus> paginateSortBus(int offset,int pageSize,String field) {
		Page <Bus> page=repository.findAll(PageRequest.of(offset, pageSize,Sort.by(field)));
		return page.getContent();
	}
	
}
