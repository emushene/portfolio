import desksupport from "./richard-mucene-automation-engineer.png";
import serversupport from "./richard-mucene-desktop-support-server-2003.png";
import autosupport from "./richard-mucene-server-engineer-winders-server-22.png";
import support from "./richard-mucene-server-support-wintel-generalist.png";
import linuxsupport from "./richard-mucene-tier-3-wintel-linux.png";
import graduate from "./richard-mucene-graduation-bsc-information-systems.png";

export const myData = [
  {
    id: 1,
    title: "PROFESSIONAL SUMMARY",
    img: desksupport,
    description: (
        <ul>
          <span>
          I am an experienced Infrastructure Solution Architect, DevOps specialist, and Application & System 
          Administrator with a robust background in managing and optimizing IT infrastructures. 
          My expertise lies in designing, implementing, and overseeing strong cloud environments and IT 
          systems, particularly focusing on both Windows (including Server 2019 and 2022) and Linux operating systems.
           I am proficient in a range of technologies, including <span className="font-bold">Terraform, Java, Python, Azure DevOps, Azure,
           AWS tools, Cloud Build, Docker, and Kubernetes,</span> among others. I excel at optimizing system performance,
             ensuring high availability, and automating operations. Additionally, I have a solid understanding of
              managing network and security configurations, which complements my comprehensive knowledge of <span className="font-bold"> System 
              Administration. Linux & MS Server!</span>
          </span>
        </ul>
    ),
      
  },
  {
    id: 2,
    title: "Education Background",
    img: graduate,
    description: (
      <ul>
        <li> - Bachelor's Degree in Information Technology</li>
        <li> - Certification in Azure Cloud Computing</li>
        <li> - Certification in AWS Cloud Computing</li>
        <li> - Certification in Projects Management - Wits</li>
        <li> - ITIL V3</li>
        <li> - DevOps Training</li>
        <li> - Java Full Stack - Digital Youth Academy </li>
        <li> - C# - Microsoft Cert </li>
        <li> - Numerous online courses in related technologies</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "DevOps Team Lead - P-pay Global Service · Contract",
    img: linuxsupport,
    description: (
      <ul>
        <span className="block">
          As the DevOps team lead at a Fintech startup focused on loans
          services, I oversee the development of applications that streamlines
          loan processes. In addition to my leadership role, I also serve as the{" "}
          <span className="font-bold">Scrum Master</span>, facilitating agile
          practices and ensuring effective team collaboration.
        </span>
        <span className="block mt-2">
          {" "}
          My responsibilities include integrating development and operations to
          enhance workflows and improve software delivery. I implement CI/CD
          pipelines, optimize infrastructure, and ensure high availability and
          scalability of our applications, all aimed at delivering a seamless
          user experience.
        </span>
      </ul>
    ),
  },
  {
    id: 5,
    title: "Senior Wintel Generalist - T-Systems",
    img: autosupport,
    description: (
      <ul>
        <span>
          <span className="block font-bold">
            Tier 3 Senior Wintel Support Engineer to Eskom, Transnet, Console
            Glass, Man Trucks, Mercedes Benz SA.
          </span>
          <li> - Powershell Automation</li>
          <li>
            {" "}
            - Cloud Computing Azure. Creating and Maintaining ARM Templates,
            Office 365
          </li>
          <li> - VMWare Administration & Configuration</li>
          <li> - Server Migration -( Hyper-V/VMware P2V-V2P)</li>
          <li> - SCOM Monitoring Agents and Gateway Servers maintenance.</li>
          <li> - SCCM - Patching</li>
          <li>
            {" "}
            - Server Operating Systems Deployment, Patching and Maintenance.
          </li>
          <li>
            {" "}
            - Active Directory, Group Policy, Exchange Server Administration.
          </li>
          <li> - Hardware maintenance - HP, DELL, HUAWEI, IBM</li>
          <li> - Data Center Runs</li>
          <li>
            {" "}
            - Backup and DR - VEEAM Backup & Replication , ACRONIS True Image,
            Backup Exec
          </li>
          <li>- OS Windows Server 2012, 2016, 2019 General Administration.</li>
        </span>
      </ul>
    ),
  },
  {
    id: 6,
    title: "IT Field Support Engineer - Netsurit",
    img: support,
    description: (
      <ul>
        <span className="block"> - Roaming Technical Support Engineer</span>
        <span className="block"> - Desktop Support to Small Business around Johannesburg.</span>
        <span className="block"> - Server Support -MS Server 2003</span>
        <span className="block"> -  Data Center Administration</span>
        <span className="block"> - Backup Engineer - Comvault</span>
        <span className="block"> - Backup Engineer - Backup Exec to all NetsurIT Clients</span>
      </ul>
    ),
  },
  {
    id: 4,
    title: "Infrastructure Solutions Architect Disaster Recovery - TrueERP",
    img: serversupport,
    description: (
      <ul>
<span className="block">Project Management</span>
<span className="block">- Implemented workflow diagrams</span>
<span className="block">- Setup and Configuration of Site to Site Networks</span>
<span className="block">- Migrated Servers from Melbourne to Johannesburg</span>
<span className="block">- Configured Hyper-V Server</span>
<span className="block">- Configured MySQL Master-Master Replication</span>
<span className="block">- Testing and QA</span>
<span className="block">- Implemented Backup Systems for MySQL and OS / VEEAM</span>  
<span className="block">- Implemented Percona Database Optimization and Replication Monitoring. </span>
<span className="block">- DR Real Time Fail-Over testing on Production - Passed</span> 

      </ul>

    ),
      
  },
];
