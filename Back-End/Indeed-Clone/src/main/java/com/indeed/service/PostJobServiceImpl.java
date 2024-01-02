package com.indeed.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indeed.entities.PostJobEntity;
import com.indeed.models.PostJobModel;
import com.indeed.repositories.PostJobRepository;

@Service
public class PostJobServiceImpl implements PostJobService 
{
	@Autowired
	private PostJobRepository jobRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public PostJobEntity createJobPost(PostJobModel model) 
	{
		PostJobEntity savedEntity=null;
		try
		{
			PostJobEntity entity = modelMapper.map(model, PostJobEntity.class);
			
			int date = new Date().getDate();
			entity.setCreatedAt(LocalDate.now().toString());
			savedEntity = jobRepo.save(entity);
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
		return savedEntity;
	}

//	@Override
//	public PostJobModel getJobPost(PostJobModel model) 
//	{
//		responseModel = new ResponseModel();
//		try
//		{
//			PostJobEntity entity = modelMapper.map(model, PostJobEntity.class);
//			
//			PostJobEntity savedEntity = jobRepo.save(entity);
//			
//			if(savedEntity !=null)
//			{
//				responseModel.setResponseCode(102);
//				responseModel.setResponseMessage(" Get Job Post : Successfull");
//			}
//			else
//			{
//				responseModel.setResponseCode(104);
//				responseModel.setResponseMessage(" Get Job Post : Failed");
//			}
//		}
//		catch(Exception ex)
//		{
//			responseModel.setResponseCode(108);
//			responseModel.setResponseMessage(" Error While Getting Job Post");
//			ex.printStackTrace();
//		}
//		return responseModel;
//	}

	@Override
	public List<PostJobEntity> getAllJobs() 
	{
		List<PostJobEntity> entities = null;
		try
		{
			entities = jobRepo.findAll();
			
		}	
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
		return entities;
	}

}
