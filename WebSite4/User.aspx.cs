using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class User : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        String aa = TextBox1.Text;
        String bb = TextBox2.Text;
        String cc = TextBox3.Text;
        String dd = TextBox4.Text;
        String ee = TextBox5.Text;
        String ff = TextBox6.Text;
        String gg = String.Empty;
        if (RadioButton1.Checked)
        {
            gg = "Best";
        }
        else if (RadioButton2.Checked)
        {
            gg = "Good";
        }
        else if (RadioButton3.Checked)
        {
            gg = "Average";
        }
        else if (RadioButton4.Checked)
        {
            gg = "Least";
        }
        String hh = String.Empty;
        if (RadioButton5.Checked)
        {
            hh = "1";
        }
        else if (RadioButton6.Checked)
        {
            hh = "2";
        }
        else if (RadioButton7.Checked)
        {
            hh = "3";
        }
        else if (RadioButton8.Checked)
        {
            hh = "4";
        }
        else if (RadioButton9.Checked)
        {
            hh = "5";
        }
        String ii = TextBox7.Text;


        String strconn = (@"Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True");
        SqlConnection conn = new SqlConnection(strconn);
        SqlCommand cmd = new SqlCommand();
        conn.Open();
        cmd.Connection = conn;
        String strQuery = "Insert into feedback values(@NAME,@ADDRESS,@CITY,@STATE,@PHONE,@EMAIL,@SERVICE,@RATINGS,@COMMENTS)";
        cmd.CommandText = strQuery;
        cmd.CommandType = CommandType.Text;
        cmd.Parameters.AddWithValue("@NAME", aa);
        cmd.Parameters.AddWithValue("@ADDRESS", bb);
        cmd.Parameters.AddWithValue("@CITY", cc);
        cmd.Parameters.AddWithValue("@STATE", dd);
        cmd.Parameters.AddWithValue("@PHONE", ee);
        cmd.Parameters.AddWithValue("@EMAIL", ff);
        cmd.Parameters.AddWithValue("@SERVICE", gg);
        cmd.Parameters.AddWithValue("@RATINGS", hh);
        cmd.Parameters.AddWithValue("@COMMENTS", ii);
        cmd.ExecuteNonQuery();
       
        conn.Close();

        Literal1.Text = "Thankyou for Submitting your feedback";
    }
   
    protected void Button4_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
        TextBox6.Text = "";
        if (RadioButton1.Checked)
        {
            RadioButton1.Checked = false;
        }
        if (RadioButton2.Checked)
        {
            RadioButton2.Checked = false;
        }
        if (RadioButton3.Checked)
        {
            RadioButton3.Checked = false;
        }
        if (RadioButton4.Checked)
        {
            RadioButton4.Checked = false;
        }
        if (RadioButton5.Checked)
        {
            RadioButton5.Checked = false;
        }
        if (RadioButton6.Checked)
        {
            RadioButton6.Checked = false;
        }
        if (RadioButton7.Checked)
        {
            RadioButton7.Checked = false;
        }
        if (RadioButton8.Checked)
        {
            RadioButton8.Checked = false;
        }
        if (RadioButton9.Checked)
        {
            RadioButton9.Checked = false;
        }
        TextBox7.Text = "";
    }
}