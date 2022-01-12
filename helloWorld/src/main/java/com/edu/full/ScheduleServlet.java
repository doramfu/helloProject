package com.edu.full;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/ScheduleServlet")
public class ScheduleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ScheduleServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 조회할 때 사용. doGet()
		response.setContentType("text/json;charset=utf-8");
		
		FullDAO dao = new FullDAO();
		List<Map<String,String>> schedules = dao.getSchedules();
		
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(schedules)); //웹 브루아주에 출력.
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 스케줄 등록하는 서블릿.
		request.setCharacterEncoding("utf-8");
		System.out.println(request);
		String action = request.getParameter("action");
		
		String title = request.getParameter("title");
		String start = request.getParameter("start");
		String end = request.getParameter("end");
		Map<String,String> map = new HashMap<String,String>();
		map.put("title", title);
		map.put("startDate", start);
		map.put("endDate", end);
		FullDAO dao = new FullDAO();
		String result = "";
		
		if(action.equals("insert")) {
			// map 타입에 사용자 입력값을 전부 담아두기.
			try {
				if(dao.insertSchedule(map)) {
					// {"retCode" : "Success"}
					result = "{\"retCode\":\"Success\"}";
				}else {
					result = "{\"retCode\":\"Fail\"}";
					
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			//웹브라우저로 json형태의 값을 송신.
			response.getWriter().print(result);
			
		}else if(action.equals("delete")) {
			try {
				if(dao.deleteSchedule(map)) {
					result = "{\"retCode\":\"Success\"}";
				}else {
					result = "{\"retCode\":\"Fail\"}";
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			//웹브라우저로 json형태의 값을 송신.
			response.getWriter().print(result);
		}
		
	}

}
