package com.indeed.models;

import java.util.List;

public class ResponseModel 
{
	private int responseCode;
	private String responseMessage;
	private List<?> responseData;
	public int getResponseCode() {
		return responseCode;
	}
	public void setResponseCode(int responseCode) {
		this.responseCode = responseCode;
	}
	public String getResponseMessage() {
		return responseMessage;
	}
	public void setResponseMessage(String responseMessage) {
		this.responseMessage = responseMessage;
	}
	public List<?> getResponseData() {
		return responseData;
	}
	public void setResponseData(List<?> responseData) {
		this.responseData = responseData;
	}
}
