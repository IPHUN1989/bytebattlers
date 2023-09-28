package com.codecool.bytebattlers.repository;

import com.codecool.bytebattlers.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findCategoryByPublicID(UUID publicID);

    void deleteByPublicID(UUID publicID);

}