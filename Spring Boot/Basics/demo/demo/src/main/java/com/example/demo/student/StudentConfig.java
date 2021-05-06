package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student rusiru = new Student(
                    "Rusiru",
                    "thushrakart@gmail.com",
                    LocalDate.of(1997, DECEMBER, 24),
                    23
            );

            Student nuwan = new Student(
                    "Nuwan",
                    "nuwan@gmail.com",
                    LocalDate.of(1997, JANUARY, 25),
                    24
            );

            repository.saveAll(
                    List.of(rusiru, nuwan)
            );
        };

    }
}
