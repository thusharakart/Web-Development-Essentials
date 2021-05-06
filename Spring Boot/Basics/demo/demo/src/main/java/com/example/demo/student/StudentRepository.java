package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// here this interface need to extends from JpaRepository with some generics (Obj, id)
// here the object is Student and the type of id is Long.

@Repository  // this is responsible for data access
public interface StudentRepository extends JpaRepository<Student, Long> {

}
