package com.edu.serv;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.emp.EmpDAO;
import com.edu.emp.EmployeeVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/InsertEmployeeServlet")
public class InsertEmployeeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public InsertEmployeeServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//응답정보에 charset 지정.
		// 출력페이지에 content-type: json 지정.
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		request.setCharacterEncoding("utf-8");
		
		String eid = request.getParameter("employee_id");
		String fn = request.getParameter("first_name");
		String ln = request.getParameter("last_name");
		String em = request.getParameter("email");
		String hd = request.getParameter("hire_date");
		String sal = request.getParameter("salary");
		
		//empList.html 페이지 Ajax(현재페이지) 호출.
		// 사용자가 입력한 값들..
		EmployeeVO vo = new EmployeeVO();
		vo.setEmployeeId(Integer.parseInt(eid));
		vo.setFirstName(fn);
		vo.setLastName(ln);
		vo.setEmail(em);
		vo.setHireDate(hd);
		vo.setSalary(Integer.parseInt(sal));
		vo.setJobId("IT_PROG");
		
		EmpDAO dao = new EmpDAO();
		dao.insertEmployee(vo);
		
		//json 형태의 결과값을 반환
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(vo));
	}

}
