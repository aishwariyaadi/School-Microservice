package com.charu.readservice;

import com.charu.readservice.School;
import com.charu.readservice.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/schools")
public class SchoolController {

    @Autowired
    private SchoolService schoolService;
    @GetMapping
    public List<School> getAllSchools() {
        return schoolService.getAllSchools();
    }










}
