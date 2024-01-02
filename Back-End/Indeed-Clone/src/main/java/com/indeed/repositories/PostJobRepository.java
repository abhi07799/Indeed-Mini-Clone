package com.indeed.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.indeed.entities.PostJobEntity;

@Repository
public interface PostJobRepository extends JpaRepository<PostJobEntity, Integer>
{

}
