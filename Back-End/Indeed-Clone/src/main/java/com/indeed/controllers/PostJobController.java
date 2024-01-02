package com.indeed.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.indeed.entities.PostJobEntity;
import com.indeed.models.PostJobModel;
import com.indeed.service.PostJobService;

@CrossOrigin
@RestController
@RequestMapping("job/v1")
public class PostJobController 
{
	@Autowired
	private PostJobService jobService;
	
	@GetMapping("/ram")
	public String test()
	{
		return "Jai Shree RAM";
	}
	
	@PostMapping("/createJob")
	public PostJobEntity createJobPost(@RequestBody PostJobModel jobModel)
	{
		return jobService.createJobPost(jobModel);
	}
	
//	@GetMapping("/getJob")
//	public PostJobModel getJobPost(@RequestBody PostJobModel jobModel)
//	{
//		return jobService.getJobPost(jobModel);
//	}
	
	@GetMapping("/getAllJobs")
	public List<PostJobEntity> getAllJobs()
	{
		return jobService.getAllJobs();
	}
}
