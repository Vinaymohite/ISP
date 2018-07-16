using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
public partial class Management : System.Web.UI.Page
{
    /// String strconn = "Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True";
    SqlConnection conn = new SqlConnection("Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True");
    SqlCommand cmd = new SqlCommand();
    SqlDataReader sqldr;
    string g; int i;
    public void auto()
    {
        if (conn.State == ConnectionState.Open)
            conn.Close();
        conn.Open();
        cmd = conn.CreateCommand();
        cmd.CommandText = "select max(SrNo) from Management";
        sqldr = cmd.ExecuteReader();

        if (sqldr.Read())
        {
            // g = sqldr.GetString(0);
            i = sqldr.GetInt32(0);
        }
        // txtuid.Text = Convert.ToString(1 + Convert.ToInt32(g));
        TextBox1.Text = Convert.ToString(1 + i);
        TextBox2.Focus();
        conn.Close();
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //String strconn = "Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True";
        //SqlConnection conn = new SqlConnection(strconn);
        //SqlCommand cmd = new SqlCommand();
        conn.Open();
        cmd.Connection = conn;
        int aa = Convert.ToInt32(TextBox1.Text);
        String bb = TextBox2.Text;
        String cc = TextBox3.Text;
        String dd = TextBox4.Text;
        String ee = TextBox5.Text;
        String ff = TextBox6.Text;
        String gg = TextBox7.Text;
        String hh = TextBox8.Text;
        String ii = TextBox9.Text;
        String jj = TextBox10.Text;
        String kk = TextBox11.Text;
        String ll = TextBox12.Text;
        String mm = TextBox13.Text;

        cmd = new SqlCommand("Insert into Management(SrNo,Username,Name,Site,OperatorName,IPAddress,ActivationDate,RenewDate,ExpiryDate,PlanName,ZoneName,BuildingName,BalanceAmount)values('" + aa + "','" + bb + "','" + cc + "','" + dd + "','" + ee + "','" + ff + "','" + gg + "','" + hh + "','" + ii + "','" + jj + "','" + kk + "','" + ll + "','" + mm + "')", conn);
        
        cmd.CommandType = CommandType.Text;
       
      
        cmd.ExecuteNonQuery();
        conn.Close();
        Literal1.Text = "Thankyou for register";
    }
    
    protected void Button2_Click(object sender, EventArgs e)
    {
        conn.Open();
        int aa = Convert.ToInt32(TextBox1.Text);
        String bb = TextBox2.Text;
        String cc = TextBox3.Text;
        String dd = TextBox4.Text;
        String ee = TextBox5.Text;
        String ff = TextBox6.Text;
        String gg = TextBox7.Text;
        String hh = TextBox8.Text;
        String ii = TextBox9.Text;
        String jj = TextBox10.Text;
        String kk = TextBox11.Text;
        String ll = TextBox12.Text;
        String mm = TextBox13.Text;

        string abc = "UPDATE Management SET SrNo =" + aa + ",Username ='" + bb + "' ,Name ='" + cc + "',Site ='" + dd + "',OperatorName ='" + ee + "',IPAddress ='" + ff + "',ActivationDate ='" + gg + "',RenewDate ='" + hh + "',ExpiryDate ='" + ii + "',PlanName ='" + jj + "',ZoneName ='" + kk + "',BuildingName ='" + ll + "',BalanceAmount ='" + mm + "'  WHERE Username = '" + bb + "'";
        SqlCommand cmd = new SqlCommand(abc, conn);
              
        cmd.ExecuteNonQuery();
       Literal1.Text="one record updated";
        conn.Close();
        }
    
    protected void Button5_Click(object sender, EventArgs e)
    {
        if (conn.State == ConnectionState.Open)
            conn.Close();
        conn.Open();

        SqlDataAdapter adp;
        DataSet ds;
        DataRow dr;
        DataTable dt;
        adp = new SqlDataAdapter("select * from management", conn);
        ds = new DataSet();
        adp.Fill(ds, "temp");
        dt = ds.Tables["temp"];
        dt.PrimaryKey = new DataColumn[] { dt.Columns["username"] };

        string bb = TextBox2.Text;
        dr = dt.Rows.Find(bb);
        if (dr != null)
        {
            TextBox1.Text = dr[0].ToString();
            TextBox2.Text = dr[1].ToString();
            TextBox3.Text = dr[2].ToString();
            TextBox4.Text = dr[3].ToString();
            TextBox5.Text = dr[4].ToString();
            TextBox6.Text = dr[5].ToString();
            TextBox7.Text = dr[6].ToString();
            TextBox8.Text = dr[7].ToString();
            TextBox9.Text = dr[8].ToString();
            TextBox10.Text = dr[9].ToString();
            TextBox11.Text = dr[10].ToString();
            TextBox12.Text = dr[11].ToString();
            TextBox13.Text = dr[12].ToString();

            Button2.Enabled = true;

        }
        else
        {
            Literal1.Text = "Not Found";
        }

    }
   
    protected void Button7_Click(object sender, EventArgs e)
    {
        auto();
    }
    
    protected void Button4_Click(object sender, EventArgs e)
    {
        conn.Open();
        string bb = TextBox2.Text;
        cmd = new SqlCommand("DELETE FROM Management WHERE Username = '" + bb + "'", conn);
        cmd.ExecuteNonQuery();
       Literal1.Text="one record Delete";
        conn.Close();
    }

    protected void Button6_Click(object sender, EventArgs e)
    {
        
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
        TextBox6.Text = "";
        TextBox7.Text = "";
        TextBox8.Text = "";
        TextBox9.Text = "";
        TextBox10.Text = "";
        TextBox11.Text = "";
        TextBox12.Text = "";
        TextBox13.Text = "";
   
    }
    protected void Button8_Click(object sender, EventArgs e)
    {
        Response.Redirect("recordsman.aspx");
    }
}