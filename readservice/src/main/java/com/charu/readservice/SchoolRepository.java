package com.charu.readservice;

import com.charu.readservice.School;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SchoolRepository extends MongoRepository<School, String> {
}
