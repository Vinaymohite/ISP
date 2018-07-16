<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="History.aspx.cs" Inherits="History" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
    <style type="text/css">
    .style1
    {
        width: 100%;
    }
    .style2
    {
        width: 270px;
            height: 275px;
        }
        .style3
        {
            height: 275px;
        }
        .style4
        {
            height: 310px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
    <table class="style1" style="background-image: url('img/1886497.jpg'); color: #000000;">
    <tr>
        <td class="style2">
            <asp:Image ID="Image2" runat="server" 
                ImageUrl="~/img/Internet_connecting_the_world.gif" Width="245px" />
        </td>
        <td class="style3">
            In November 2006, in an effort to provide advanced cloud services for the Greek 
            academic and research community, GRNET decides to launch a cloud storage 
            service, similar toAmazon&#39;s S3, called Pithos. The project is outsourced and 
            opens for public beta to the members of the Greek academic and research 
            community in May 2009.[2] In June 2010, GRNET decides the next step in this 
            course; to create a complete, AWS-like cloud service 
            (Compute/Network/Volume/Image/Storage). This service, called~okeanos, aims to 
            provide the Greek academic and research community with access to a virtualized 
            infrastructure that various projects can take advantage of, e.g. experiments, 
            simulations and labs. Given the non-ephemeral nature of the resources that the 
            service provides, the need arises for persistent cloud servers. In search for a 
            solution, in October 2010 GRNET decides to base the service on Google Ganeti and 
            to design and implement all missing parts in-house. In May 2011, the older 
            Pithos service is rewritten from scratch in-house, with the intention of being 
            integrated to ~okeanos as its storage service. Moreover, the new Pithos adds 
            support for Dropbox-like syncing. In July 2011, ~okeanos reaches its public 
            alpha stage. This version (v0.5.2.1) includes the Identity, Compute, Network and 
            a primitive Image service. The alpha release of the new, rewritten Pithos 
            follows shortly after, in November 2011.In November 2006, in an effort to 
            provide advanced cloud services for the Greek academic and research community, 
            GRNET decides to launch a cloud storage service, similar toAmazon&#39;s S3, called 
            Pithos.</td>
    </tr>
    <tr>
    <td colspan="2" class="style4">
    The project is outsourced and opens for public beta to the members of the Greek academic and research community in May 2009.[2]
In June 2010, GRNET decides the next step in this course; to create a complete, AWS-like cloud service (Compute/Network/Volume/Image/Storage). This service, called~okeanos, aims to provide the Greek academic and research community with access to a virtualized infrastructure that various projects can take advtage of, e.g. experiments, simulations and labs. Given the non-ephemeral nature of the resources that the service provides, the need arises for persistent cloud servers. In search for a solution, in October 2010 GRNET decides to base the service on Google Ganeti and to design and implement all missing parts in-house.
In May 2011, the older Pithos service is rewritten from scratch in-house, with the intention of being integrated to ~okeanos as its storage service. Moreover, the new Pithos adds support for Dropbox-like syncing.
In July 2011, ~okeanos reaches its public alpha stage. This version (v0.5.2.1) includes the Identity, Compute, Network and a primitive Image service. The alpha release of the new, rewritten Pithos follows shortly after, in November 2011. It is marketed as Pithos+ and the old Pithos remains as a separate service. The new Pithos+, though not integrated to ~okeanos yet, provides syncing and sharing capabilities for files, as well as native syncing clients for Mac OS X, iPhone, iPad and Windows.
In March 2012, ~okeanos enters the public alpha2 phase. This version (v0.9) includes a complete integration of the new Pithos as part of ~okeanos and now acts as the unified store for Images and Files. Around this point, in April 2012, the ~okeanos team decides to refer to the whole software stack as Synnefo and starts writing the first version of the Synnefo documentation.
In December 2012, due to interest from other parties to the Synnefo stack, GRNET decides to conceptually separate the ~okeanos and Synnefo projects. Synnefo starts to become a branding-neutral, IaaS cloud computing software, while ~okeanos becomes its real-world application, an IaaS for the Greek academic and research community.
In April 2013, a new Synnefo version (v.013) gets released after a huge cleanup and code refactoring. All separate components are merged under the single Synnefo repository. This is the first release as a unified project, containing all parts (Compute/Network/Volume/Image/Storage).
In Jun 2013, Synnefo v0.14 gets released. Since this version, Synnefo is branding neutral (all remaining ~okeanos references are removed). It also gets a branding mechanism and the corresponding documentation, so that others can adapt it to their branding identity
</td>
        </tr>
</table>
</asp:Content>

