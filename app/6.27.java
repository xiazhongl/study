package adao;

import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class BaseDao {
	private static String driver;
	private static String url;
	private static String username;
	private static String password;
	static{
		//静态代码块只会执行一次
		inint();
	}
		//加载配置文件
	public static void inint() {
		Properties prp=new Properties();
		String configFile="database.properties";
		//创建输入流，加载配置文件
		InputStream isp=BaseDao.class.getClassLoader().getResourceAsStream(configFile);
		try {
			prp.load(isp);//加载流
			driver=	prp.getProperty("driver");
			url=prp.getProperty("url");
			username=prp.getProperty("username");
			password=prp.getProperty("password");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private Connection conn = null;
	private ResultSet rs = null;
	private PreparedStatement pstmt;

	// 鎵撳紑
	public void open() {
		try {
			// 加载驱动类
			Class.forName(driver);
			//获得数据库连接
			conn = DriverManager.getConnection(url,username,password);
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}

	// 关闭
	public void close() {
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (pstmt != null) {
			try {
				pstmt.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	// 增删改
	public int DoUpdate(String sql, Object[] para) {
		int result = 0;
		open();
		try {
			pstmt = conn.prepareStatement(sql);
			//判断sql语句是否带参数，带参数，就要填充参数
			if (para != null) {
				for (int i = 0; i < para.length; i++) {
					pstmt.setObject(i + 1, para[i]);
				}
			}
			//调用方法执行sql语句
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
		return result;

	}

	// 查询
	public ResultSet DoQuery(String sql, Object[] para) {
		ResultSet result = null;
		open();
		try {
			pstmt = conn.prepareStatement(sql);
			if (para != null) {
				for (int i = 0; i < para.length; i++) {
					pstmt.setObject(i + 1, para[i]);
				}
			}
			result = pstmt.executeQuery();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//不可以关闭数据库连接
		return result;

	}
}
