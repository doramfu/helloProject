package com.edu.emp;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.edu.common.DAO;

public class EmpDAO extends DAO {

	public boolean deleteEmployee(String empId) throws SQLException {
		String sql = "DELETE FROM emp_temp WHERE employee_id=?";
		connect();
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, empId);

		int r = pstmt.executeUpdate(); //처리된 건수를 반환
		if (r > 0) {
			return true;
		} else {
			return false;
		}

	}

	// 삭제
	public void deleteEmp(int employeeId) {
		String sql = "DELETE emp_temp WHERE employee_id = ?";
		connect();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, employeeId);
			int r = pstmt.executeUpdate();
			System.out.println(r + "건 삭제.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

	// 수정
	public void updateEmp(EmployeeVO vo) {
		String sql = "UPDATE emp_temp SET salary = ?, job_id = ?,email = ? WHERE employee_id=?";
		connect();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, vo.getSalary());
			pstmt.setString(2, vo.getJobId());
			pstmt.setString(3, vo.getEmail());
			pstmt.setInt(4, vo.getEmployeeId());
			int r = pstmt.executeUpdate();
			System.out.println(r + "건 수정.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

	public void insertEmployee(EmployeeVO vo) {
		String sql = "INSERT INTO emp_temp(employee_id,first_name,last_name,salary,"
				+ "email,hire_date,job_id) values(?,?,?,?,?,?,?)";
		connect();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, vo.getEmployeeId());
			pstmt.setString(2, vo.getFirstName());
			pstmt.setString(3, vo.getLastName());
			pstmt.setInt(4, vo.getSalary());
			pstmt.setString(5, vo.getEmail());
			pstmt.setString(6, vo.getHireDate());
			pstmt.setString(7, "IT_PROG");
			int r = pstmt.executeUpdate();
			System.out.println(r + "건 입력됨.");

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

	// 한건 입력
	public void insertEmp(EmployeeVO vo) {
		String sql = "INSERT INTO emp_temp(employee_id,first_name,last_name,email,job_id,salary,hire_date) "
				+ "VALUES(employees_seq.nextval,?,?,?,?,?,?)";
		connect();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, vo.getFirstName());
			pstmt.setString(2, vo.getLastName());
			pstmt.setString(3, vo.getEmail());
			pstmt.setString(4, vo.getJobId());
			pstmt.setInt(5, vo.getSalary());
			pstmt.setString(6, vo.getHireDate());
			int r = pstmt.executeUpdate();
			System.out.println(r + "건 입력.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

	// 전체 조회
	public List<EmployeeVO> getEmpList() {
		String sql = "SELECT * FROM Emp_temp ORDER BY 1";
		List<EmployeeVO> empList = new ArrayList<EmployeeVO>();
		connect();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				EmployeeVO emp = new EmployeeVO();
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setFirstName(rs.getString("first_name"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date").substring(0, 10));
				emp.setJobId(rs.getString("job_id"));
				emp.setSalary(rs.getInt("salary"));
				empList.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return empList;
	}

	// 단건 조회
	public EmployeeVO getEmployee(int eid) {
		String sql = "SELECT * FROM emp_temp WHERE employee_id = ?";
		connect();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, eid);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				EmployeeVO emp = new EmployeeVO();
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setFirstName(rs.getString("first_name"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setJobId(rs.getString("job_id"));
				emp.setSalary(rs.getInt("salary"));
				return emp;

			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

}
