import java.sql.connection;
import java.sql.drivermanager;
import java.sql.sqlexception;
import org.apache.log4j.logger;

/**
 使用JDBC的纯java方式建立数据库连接并关闭。
 */
 public class test2{
       private static logger logger = logger.getlogger(test1.class.getname());
       public static void main(String[] args){
           connection conn = null;
           //1.加载驱动
           try{
               class.forname("com.mysql.jdbc.driver");
           } catch (classnotfoundxception e){
               logger.error(e);
           }
           //2建立连接                                                              Supports html file only!
           try{
               conn = drivermanager.getconnection(
                   "jdbc:mysql://localhost:3306/epet",
                   "epetadmin","0000");
               system.out.println("建立连接成功!");
           } catch (sqlexception e) {
               logger.error(e);
           }finally {
            //关闭连接
             try{
                 if (nill !=conn) {
                     conn.close();
                     system.out.println("关闭连接成功！");
                 }
             }catch (sqlexception e) {
                 logger.error(e);
             }
           } 

           
       }

 }



第一步，加载JDBC数据库驱动程序（不同的数据库有不同的数据库驱动，所以在连接数据库之前，需加载驱动）
    格式：
        String driver = "com.mysql.jdbc.Driver";
        Class.forName(driver);//加载mysql数据库,用Class.forName("驱动名称")进行加载

第二步,创建数据库连接,将数据库与当前文件连接起来,后面才可以对数据库进行操作
    格式:
        String url = "jdbc:mysql://localhost:3306/数据库名";//建立数据库连接地址
        Connection conn = null;//建立数据库连接对象
        conn =  DriverManager.getConnection(url,"root","root");//连接数据库

第三步,创建操作对象和操作语句(用插入操作做例子)
        PreparedStatement pstmt = null; //4.建立数据库操作对象
        String sql = null;//数据库操作语句
        sql = "INSERT INTO 表名 (属性,属性,属性) VALUES (?,?,?)" ;//插入操作,可以是别的操作语句
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1,值) ;
        pstmt.setString(2,值) ;
        pstmt.setString(3,值) ;
        pstmt.executeUpdate() ;

第四步,当操作时查询操作时,还需要创建一个结果集对象
    格式:
        ResultSet rs = null;
        sql = "select 属性,属性,属性 from 表名";
        pstmt = conn.prepareStatement(sql);
        rs = pstmt.executeQuery();
        rs.getString("属性");具体方法看属性的类型,返回查询结果

第五步,关闭数据库,在这有个规则,就是得先关闭结果集,再关闭操作对象,最后关闭数据库连接
    格式:
        rs.close();//如果程序没有查询操作,则不用写这条语句
        ptsmt.close();
        conn.close();