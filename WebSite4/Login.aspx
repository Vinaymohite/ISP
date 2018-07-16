<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
    <style type="text/css">
        .style1
        {
            width: 919px;
        height: 256px;
    }
        .style2
        {
            width: 252px;
        }
    .style3
    {
        text-align: center;
    }
        .style4
        {
            height: 82px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">

    <p class="style3" 
        
        style="font-family: Algerian; font-size: xx-large; background-image: url('img/1886497.jpg'); color: #FF0000;">
        USER LOGIN</p>
    <table class="style1">
        <tr>
            <td class="style2" rowspan="3">
                <asp:Image ID="Image2" runat="server" ImageUrl="~/img/login_icon.jpg" 
                    Width="275px" />
            </td>
            <td style="background-image: url('img/1886497.jpg'); color: #000000; font-size: large; font-family: 'Times New Roman', Times, serif;">
               <h1 style="background-image: url('img/1886497.jpg'); font-family: Arial;">
                   <b style="color: #000000; font-family: 'Times New Roman', Times, serif">Username</b>
        <asp:TextBox ID="TextBox2" runat="server" Width="128px"></asp:TextBox>
                &nbsp;<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                       ControlToValidate="TextBox2" ErrorMessage="Please Enter User Name" 
                       Font-Names="Times New Roman" Font-Size="Large" ForeColor="Red"></asp:RequiredFieldValidator>
                </h1>
            </td>
        </tr>
        <tr>
            <td class="style4" 
                
                
                style="background-image: url('img/1886497.jpg'); color: #000000; font-size: large; font-family: 'Times New Roman', Times, serif;">
               <h1 style="font-family: 'Times New Roman', Times, serif">
                   <b style="color: #000000; font-family: 'Times New Roman', Times, serif">Password</b> 
        <asp:TextBox ID="TextBox3" runat="server" TextMode="Password" Width="128px"></asp:TextBox>
                   <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                       ControlToValidate="TextBox3" ErrorMessage="Please Enter Password" 
                       Font-Names="Times New Roman" Font-Size="Large" ForeColor="Red"></asp:RequiredFieldValidator>
                </h1>
            </td>
        </tr>
        <tr>
            <td style="background-image: url('img/1886497.jpg'); color: #000000; font-size: large; font-family: 'Times New Roman', Times, serif;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Login" 
                    Height="38px" Width="91px" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Button ID="Button4" runat="server" Height="38px" onclick="Button4_Click" 
                    Text="Cancel" Width="91px" />
            </td>
        </tr>
    </table>

</asp:Content>

