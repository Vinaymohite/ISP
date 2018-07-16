<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Fresher.aspx.cs" Inherits="Fresher" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
    <style type="text/css">
    .style1
    {
        width: 100%;
    }
    .style2
    {
        }
    .style3
    {
        width: 221px;
        height: 21px;
    }
    .style4
    {
        height: 21px;
    }
        .style5
        {
            width: 221px;
            height: 32px;
        }
        .style6
        {
            height: 32px;
        }
        .style7
        {
            width: 221px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
    <table class="style1" 
        
        
        style="background-image: url('img/Best-ISP-in-Toronto-1200x900.jpg'); color: #000000; font-size: large;">
    <tr>
        <td class="style7">
            NAME</td>
        <td>
            <asp:TextBox ID="TextBox1" runat="server" Height="26px" Width="200px"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                ControlToValidate="TextBox1" ErrorMessage="Please Enter Name" ForeColor="Red"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td class="style7">
            ADDRESS</td>
        <td>
            <asp:TextBox ID="TextBox2" runat="server" TextMode="MultiLine" Width="200px"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                ControlToValidate="TextBox2" ErrorMessage="Please Enter Address" 
                ForeColor="Red"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td class="style3">
            CITY</td>
        <td class="style4">
            <asp:TextBox ID="TextBox3" runat="server" Height="26px" Width="200px"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" 
                ControlToValidate="TextBox3" ErrorMessage="Please Enter City Name" 
                ForeColor="Red"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td class="style5">
            STATE</td>
        <td class="style6">
            <asp:TextBox ID="TextBox4" runat="server" Height="26px" Width="200px"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" 
                ControlToValidate="TextBox4" ErrorMessage="Please Enter State" ForeColor="Red"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td class="style7">
            PHONE</td>
        <td>
            <asp:TextBox ID="TextBox5" runat="server" Height="26px" TextMode="Number" 
                Width="200px"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" 
                ControlToValidate="TextBox5" ErrorMessage="Please Enter Phone No" 
                ForeColor="Red"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td class="style7">
            EMAIL-ID</td>
        <td>
            <asp:TextBox ID="TextBox6" runat="server" Height="26px" TextMode="Email" 
                Width="200px"></asp:TextBox>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" 
                ControlToValidate="TextBox6" ErrorMessage="Please Enter Email ID" 
                ForeColor="Red"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td class="style7">
            WOULD YOU LIKE TO CONNECT</td>
        <td>
            <asp:RadioButton ID="RadioButton1" runat="server" GroupName="con" Text="YES" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:RadioButton ID="RadioButton2" runat="server" GroupName="con" Text="NO" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
    </tr>
    <tr>
        <td class="style7">
            FROM WHOM DO YOU PREFER THIS</td>
        <td>
            <asp:RadioButton ID="RadioButton10" runat="server" GroupName="prefered"  Text="FRIENDS" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:RadioButton ID="RadioButton11" runat="server" GroupName="prefered" Text="RELATIVES" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:RadioButton ID="RadioButton12" runat="server" GroupName="prefered" Text="MEDIA" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:RadioButton ID="RadioButton13" runat="server" GroupName="prefered" Text="OTHERS" />
        </td>
    </tr>
    <tr>
        <td class="style7">
            RATINGS</td>
        <td>
            <asp:RadioButton ID="RadioButton5" runat="server" GroupName="rat" Text="1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:RadioButton ID="RadioButton6" runat="server" GroupName="rat" Text="2" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:RadioButton ID="RadioButton7" runat="server" GroupName="rat" Text="3" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:RadioButton ID="RadioButton8" runat="server" GroupName="rat" Text="4" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:RadioButton ID="RadioButton9" runat="server" GroupName="rat" Text="5" />
        &nbsp;</td>
    </tr>
    <tr>
        <td class="style7">
            COMMENTS</td>
        <td>
            <asp:TextBox ID="TextBox7" runat="server" TextMode="MultiLine" Width="200px"></asp:TextBox>
        </td>
    </tr>
    <tr>
        <td class="style2" colspan="2">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button1" runat="server" Text="SUBMIT" onclick="Button1_Click" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button2" runat="server" Text="CANCEL" onclick="Button2_Click" />
            <br />
            <br />
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
        </td>
    </tr>
</table>
</asp:Content>


