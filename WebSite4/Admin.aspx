<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Admin.aspx.cs" Inherits="Admin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
    <style type="text/css">
        .style1
        {
            width: 920px;
        }
        .style2
        {
            width: 296px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
        <table class="style1" 
            
            style="font-size: large; font-family: Arial; color: #000000; background-image: url('img/1886497.jpg');">
        <tr>
            <td class="style2" rowspan="3" style="background-image: url('img/1886497.jpg'); border-color: #0000FF">
                <asp:Image ID="Image2" runat="server" ImageUrl="~/img/user_login_man-512.png" 
                    Width="289px" Height="265px" />
            </td>
            <td style="border-color: #0000FF; background-image: url('img/1886497.jpg')">
               <h1 style="color: #000000"> Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:TextBox ID="TextBox2" runat="server" Width="128px"></asp:TextBox>
                   <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                       ControlToValidate="TextBox2" ErrorMessage="Please enter username" 
                       Font-Size="Smaller" ForeColor="Red"></asp:RequiredFieldValidator>
                </h1>
            </td>
        </tr>
        <tr>
            <td style="border-color: #0000FF; background-image: url('img/1886497.jpg')">
               <h1 style="color: #000000"> Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <asp:TextBox ID="TextBox3" runat="server" TextMode="Password" Width="128px"></asp:TextBox>
                   <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                       ControlToValidate="TextBox3" ErrorMessage="Please enter password" 
                       Font-Size="Smaller" ForeColor="Red"></asp:RequiredFieldValidator>
                </h1>
            </td>
        </tr>
        <tr>
            <td style="border-color: #0000FF; background-image: url('img/1886497.jpg');">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:Button 
                    ID="Button1" runat="server" onclick="Button1_Click" Text="Login" Height="33px" 
                    Width="86px" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Button ID="Button4" runat="server" Height="33px" onclick="Button4_Click" 
                    Text="Cancel" Width="86px" />
            </td>
        </tr>
    </table>
</asp:Content>


