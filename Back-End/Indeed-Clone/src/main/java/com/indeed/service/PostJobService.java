package com.indeed.service;

import java.util.List;

import com.indeed.entities.PostJobEntity;
import com.indeed.models.PostJobModel;


public interface PostJobService 
{
	PostJobEntity createJobPost(PostJobModel model);
//	ResponseModel getJobPost(PostJobModel model);
	List<PostJobEntity> getAllJobs();
}
