---
title: "The Evolution of .NET: From Framework to Core and Beyond"
authors: [sdonmez]
tags: [.net framework, .net core, .net standard]
---

The history of the .NET ecosystem goes back many years (about 25 years as of the date of this article). Considering the last 25 years, many additions have been made to the .NET ecosystem to implement/pioneer the development of areas such as desktop, web, mobile, games, cloud, IoT, AI and the technological developments required by these. As such, whether you are in the .NET ecosystem or not, there may be confusion about various frameworks and naming. In the timeline below, you can see these developments chronologically and distinctively as they are marked with different tags.

<!--truncate-->

<br/>

<iframe width="100%" height="400" src="https://time.graphics/embed?v=1&id=593132" frameborder="0" allow="fullscreen"></iframe>

<br/><br/>

:::info Warning

The content of the graph is taken from [`TimeGraphs`](https://time.graphics/line/593132). It may not be viewable because it is added and maintained by third party sources.

:::

In the heyday of Windows application development, the .NET Framework emerged as a game-changer, simplifying the development process. However, as time progressed, developers encountered limitations, leading to a cascade of patches and workarounds. The .NET Framework's tightly integrated nature with Windows posed challenges for cross-platform compatibility, and its monolithic structure hindered the adoption of more modular architectures. Additionally, the framework struggled to adapt to the evolving internet landscape. Recognizing these issues, the .NET ecosystem underwent a transformative journey, giving birth to .NET Core(Unified ".NET" anymore).

In this article, I will try to explain the evolution of .NET as much as possible. When you read this article, you will see that you can find answers to the following questions and if you have any confusion about them, they will be cleared:

- How has the evolution of .NET progressed?
- What are [`.NET Framework`](https://learn.microsoft.com/en-us/dotnet/framework), [`.NET Core`](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet), [`.NET Standard`](https://learn.microsoft.com/en-us/dotnet/standard/net-standard)?
- What are the purposes of emergence?
- What are their differences from each other?
- When to use which one?

:::caution [TL;DR]

In order not to make the article boring and to make it easy to skim through in a short time, I will give the main idea in the article and give the details in the collapsible panels. If you want to get more detailed information, do not forget to examine the collapsible panels 😊

:::

## The Birth of .NET Framework

The story begins in the early 2000s when Microsoft introduced the .NET Framework. This revolutionary platform aimed to simplify software development by providing a unified framework for building Windows applications. With its Common Language Runtime (CLR) and a comprehensive class library, .NET Framework empowered developers to create robust, scalable applications.

.NET Framework addressed key challenges developers faced, such as language interoperability and versioning issues. It marked a significant departure from traditional Windows development models, offering a modern, object-oriented programming paradigm.

<details>
  <summary><b>What is .NET Framework?</b></summary>
  <div>
    <div>The .NET Framework, developed by Microsoft, is a comprehensive software framework designed to facilitate the development, deployment, and execution of a diverse range of applications. It provides a common runtime environment, known as the Common Language Runtime (CLR), and a unified set of class libraries, collectively referred to as the Framework Class Library (FCL). These components enable developers to build applications using multiple programming languages, including C#, Visual Basic, and F#.
    </div>
    <br/>
    <details>
      <summary><b>Key Components of .NET Framework</b></summary>
      <details>
        <summary><b>Common Language Runtime (CLR)</b></summary>
        <div>At the heart of the .NET Framework lies the CLR, which serves as an execution environment for applications. It manages memory, handles exceptions, and ensures interoperability between different programming languages by executing code in a common intermediate language (CIL).
        </div>
        <div align="center">
          <img src={require('./net-common-language-runtime.png').default} alt="net-clr"/>
            <figcaption>Image Source: <a href="https://www.javatpoint.com/net-common-language-runtime" target="_blank" rel="noopener noreferrer">JavaTpoint</a></figcaption>
        </div>
      </details>
      <details>
        <summary><b>Framework Class Library (FCL)</b></summary>
        <div>The FCL is a vast collection of pre-built classes and libraries that provide a foundation for application development. It encompasses a wide range of functionalities, from data access and input/output operations to graphical user interface (GUI) development, making it a powerful resource for developers.
        </div>
        <div align="center">
          <img src={require('./net-fcl.png').default} alt="net-clr"/>
            <figcaption>Image Source: <a href="https://www.geeksforgeeks.org/net-framework-class-library-fcl/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a></figcaption>
        </div>
      </details>
      <details>
        <summary><b>Common Intermediate Language (CIL)</b></summary>
        <div>Common Intermediate Language (CIL), also known as Microsoft Intermediate Language (MSIL) or simply Intermediate Language (IL), is an intermediate representation of code used by the .NET Framework. When you write code in a .NET language such as C#, it is compiled into CIL before being executed by the Common Language Runtime (CLR).
        </div>
      </details>
      <details>
        <summary><b>Common Type System (CTS)</b></summary>
        <div>The Common Type System (CTS) is a key component of the .NET Framework, providing a common set of data types that can be used across different programming languages supported by the framework. The primary goal of CTS is to enable seamless integration and interaction between components developed in different languages within the .NET ecosystem.
        </div>
      </details>
      <details>
        <summary><b>Common Language Specification (CLS)</b></summary>
        <div>The Common Language Specification (CLS) is a set of specifications within the Common Type System (CTS) of the .NET Framework. The purpose of CLS is to define a set of rules and guidelines that ensures interoperability between different languages targeting the Common Language Runtime (CLR) in the .NET ecosystem. The goal is to enable seamless integration and interaction between components developed in different languages.
        </div>
      </details>
    </details>
    <div>The .NET Framework is more than a development platform; it is a cornerstone of modern software engineering. Its comprehensive set of tools, language interoperability, and commitment to security and performance make it an invaluable asset for developers aiming to build robust, scalable, and cross-functional applications. As we embrace the future with the evolution of .NET 5 and beyond, the legacy of the .NET Framework has influenced and shaped the course of software development worldwide.</div>
  </div>
</details>

## The Need for .NET Core

As technology advanced, so did the demands of the software development landscape. With the rise of cross-platform development, microservices architecture, and cloud computing, .NET Framework faced limitations. Enter .NET Core, a leaner, modular, and cross-platform successor.

Recognizing these challenges, the .NET ecosystem underwent a transformative journey, leading to the introduction of .NET Core. This evolution was a strategic response to the limitations of the traditional .NET Framework. .NET Core addressed these challenges by embracing cross-platform support, introducing a modular architecture, and adopting an open-source approach.

The cross-platform nature of .NET Core was a pivotal response to the growing demand for applications running on diverse environments. Its modular architecture allowed developers to choose and include only the components they needed, fostering a more efficient and lightweight runtime. Moreover, the decision to release .NET Core as an open-source project under the MIT License promoted community involvement and collaboration, enabling developers to actively contribute to the framework's growth.

Performance improvements were a key focus of .NET Core, with the introduction of features like the CoreCLR and various optimizations. This commitment to efficiency positioned .NET Core as a high-performance framework suited for modern development practices. Embracing containerization and microservices architecture, .NET Core became well-adapted to the rise of Docker and the trend towards building and running applications in containers.

Developers now had the freedom to choose their development environment, deploy applications in containers, and embrace modern development practices. .NET Core was not just an upgrade; it was a strategic move towards a more versatile and adaptable framework.

<details>
  <summary><b>What is .NET Core?</b></summary>
  <div>
    <div>.NET Core is an open-source, cross-platform framework developed by Microsoft for building modern, scalable, and high-performance applications. It's a modular framework that allows developers to use only the components they need, making it lightweight and flexible. In addition to supporting Windows, .NET Core can run on macOS and Linux, making it suitable for a wide range of application development scenarios.
    </div>
    <br/>
    <details>
      <summary><b>Key Features of .NET Core</b></summary>
      <details>
        <summary><b>Fast, Lightweight, and Modular</b></summary>
        <div>One of the standout features of .NET Core is its agility. It is optimized for speed and boasts a lightweight architecture, making it an ideal choice for resource-constrained environments. The modular design ensures that developers can include only the components they need, reducing unnecessary bloat and enhancing performance.
        </div>
      </details>
      <details>
      <summary><b>Cross-Platform Compatibility</b></summary>
        <div>.NET Core breaks the shackles of platform dependency, providing developers the flexibility to create applications that run seamlessly on Windows, Linux, and macOS. This cross-platform compatibility ensures that the development and deployment process is not restricted by the underlying operating system.
        </div>
      </details>
      <details>
      <summary><b>Cross-Platform Development in the Cloud</b></summary>
        <div>Developers can leverage the cross-platform capabilities of .NET Core in cloud environments. Whether working on Windows-based development machines or macOS/Linux environments, the consistency provided by .NET Core ensures a seamless transition between local development and cloud deployment. This flexibility is especially valuable in heterogeneous development teams and hybrid cloud scenarios.
        </div>
      </details>
      <details>
      <summary><b>Open Source Framework</b></summary>
        <div>The decision to open source .NET Core marked a significant shift in Microsoft's approach. By embracing an open-source model, developers have the freedom to inspect, modify, and contribute to the framework's codebase. This fosters a collaborative environment and accelerates innovation within the .NET ecosystem.
        </div>
      </details>
      <details>
      <summary><b>ASP.NET Core Integration</b></summary>
        <div>While .NET Core is the underlying platform, ASP.NET Core is specifically tailored for web development. ASP.NET Core applications run on the .NET Core framework, providing a robust and scalable foundation for building modern web applications and services.
        </div>
      </details>
      <details>
      <summary><b>Package Management with NuGet</b></summary>
        <div>.NET Core leverages NuGet, a package manager for .NET applications. This allows developers to easily include and manage dependencies within their projects. NuGet simplifies the process of integrating external libraries and components, streamlining development workflows.
        </div>
      </details>
      <details>
      <summary><b>Microservices Architecture</b></summary>
        <div>.NET Core is well-suited for microservices architecture, a design approach where an application is broken down into smaller, independently deployable services. The modular and lightweight nature of .NET Core facilitates the development of microservices, allowing teams to create, deploy, and scale individual services independently.
        </div>
      </details>
      <details>
      <summary><b>Containerization with Docker</b></summary>
        <div>.NET Core seamlessly integrates with containerization technologies, especially Docker. Containers provide a consistent and isolated environment for applications, ensuring that they run consistently across different environments. This makes it easier for developers to package .NET Core applications, along with their dependencies, into Docker containers, simplifying deployment and scaling processes.
        </div>
      </details>
      <details>
      <summary><b>Cloud-Native Development</b></summary>
        <div>With the rise of cloud computing, .NET Core positions itself as a cloud-native framework. It aligns with the principles of developing applications that are optimized for cloud environments. Whether deploying to popular cloud platforms like Microsoft Azure, AWS, or Google Cloud, .NET Core provides the flexibility to build scalable and resilient applications that harness the power of the cloud.
        </div>
      </details>
    </details>
    <details>
      <summary><b>Core Components of .NET Core</b></summary>
        <div>.NET Core encompasses a set of core components that collectively form the foundation for developing cross-platform applications.
        </div>
        <br/>
        <div align="center">
          <img src={require('./net-core-components.png').default} alt="net-clr"/>
            <figcaption>Image Source: <a href="https://www.interviewbit.com/dot-net-interview-questions/" target="_blank" rel="noopener noreferrer">InterviewBit</a></figcaption>
        </div>
      <details>
        <summary><b>coreclr</b></summary>
          <div>The Common Language Runtime (CLR) is a crucial component of .NET Core. In the context of .NET Core, it is referred to as coreclr. This runtime provides essential services like memory management, exception handling, and garbage collection. Its modular design aligns with the overall lightweight nature of .NET Core.
          </div>
      </details>
      <details>
      <summary><b>corefx</b></summary>
          <div>The foundational libraries that form the .NET Core framework are encapsulated in corefx. These libraries include APIs for networking, file systems, collections, and more. By modularizing these components, developers can include only the necessary libraries, contributing to the efficiency and performance of the applications.
          </div>
      </details>
      <details>
      <summary><b>cli (Command-Line Interface)</b></summary>
          <div>The Command-Line Interface, often abbreviated as CLI, is an essential tool for developers working with .NET Core. It provides a command-line interface for tasks such as project creation, compilation, and package management. The CLI streamlines development workflows, especially in scenarios where a graphical interface is not feasible.
          </div>
      </details>
      <details>
      <summary><b>roslyn</b></summary>
          <div>The Roslyn compiler platform is a key component of .NET Core, handling the compilation of C# and Visual Basic code. Roslyn not only compiles code but also provides rich APIs for analyzing, modifying, and generating code dynamically. This extensibility empowers developers to create powerful and innovative tools built on top of the .NET platform.
          </div>
      </details>
    </details>
    <div>.NET Core, now known simply as .NET, not only excels in providing a fast, lightweight, and modular development platform but also seamlessly integrates with modern paradigms such as microservices, containers, and cloud-native development. Its adaptability to diverse environments makes it a preferred choice for building scalable, cloud-ready applications in the ever-evolving landscape of software development.</div>
  </div>
</details>

### The Unification Process and The Naming Issue

Microsoft has recognized the confusion caused by multiple frameworks and versions and has taken steps to streamline and simplify the ecosystem. The move towards a unified .NET platform aims to provide a more cohesive and consistent experience for developers across different application types and platforms.

During the Microsoft Build 2019 conference in May, the introduction of .NET 5 marked a significant milestone for developers across various platforms, including desktop, web, mobile, cloud, and devices. This platform update represented a rare convergence, unifying disparate frameworks, streamlining code complexity, and advancing cross-platform capabilities.

Microsoft's ambitious goal was to merge the source code streams of key frameworks, namely .NET Framework, .NET Core, and Xamarin/Mono. This endeavour aimed to bridge historical gaps that had emerged and provide developers with a single target framework for their projects.

According to the [`.NET Reunify Plan`](https://learn.microsoft.com/en-us/archive/msdn-magazine/2019/july/csharp-net-reunified-microsoft%E2%80%99s-plans-for-net-5) that Microsoft has planned and created the roadmap for, you can see that the unification process will be completed in the yellow area in the image below:

<div align="center">
  <img src={require('./net-5-unified-platform.png').default} alt="net-clr"/>
    <figcaption>Image Source: <a href="https://intellitect.com/blog/net-5-video/" target="_blank" rel="noopener noreferrer">IntelliTect</a></figcaption>
</div>

The transition from .NET Core 3.1 to .NET 5 is a pivotal moment. Microsoft's decision to skip version 4.x and adopt .NET 5 is due to the following reasons:

- #### Avoiding Version Confusion:

The leap from .NET Core 3.1 to .NET 5 is more than a numerical jump; it's a deliberate move to sidestep confusion with the existing .NET Framework 4.x. Microsoft's decision to skip version numbers 4.x communicates that this release is not just an incremental update but a substantial advancement. This strategic versioning ensures that developers recognize the magnitude of the changes and innovations introduced in .NET 5.

- #### Dropping the "Core" for Emphasis:

The removal of "Core" from the framework's name is more than a cosmetic change. It signifies a shift in focus, emphasizing that .NET 5 is the principal implementation of the framework going forward. This move is a declaration of maturity and completeness, indicating that .NET is no longer confined to a subset. It is a comprehensive and inclusive framework that supports a diverse range of applications and platforms.

<div align="center">
  <img src={require('./net-7.png').default} alt="net-clr"/>
    <figcaption>Image Source: <a href="https://visualstudiomagazine.com/articles/2022/11/07/net-7-ga.aspx" target="_blank" rel="noopener noreferrer">Visual Studio Magazine</a></figcaption>
</div>

- #### ASP.NET Core 5.0 and Entity Framework Core 5.0:

While the overarching framework adopted the streamlined moniker, certain components retained the "Core" in their names for practical reasons. ASP.NET Core 5.0 and Entity Framework Core 5.0 maintained their identifiers to ensure a smooth transition for developers familiar with the previous versions—ASP.NET MVC 5 and Entity Framework 5/6, respectively. This decision reflects Microsoft's commitment to clarity and compatibility in the evolving landscape.

## Bridging the Divide with .NET Standard

While .NET Core was a step in the right direction, a new challenge emerged – the fragmentation of APIs across various .NET implementations. This prompted the creation of .NET Standard, a specification that defined a set of APIs to be implemented by all .NET platforms.

.NET Standard acted as a bridge between .NET Framework and .NET Core, ensuring compatibility and facilitating the transition to the new paradigm. Developers could now create libraries targeting .NET Standard, guaranteeing compatibility with any platform implementing the standard, be it .NET Framework, .NET Core, or future versions.

<div align="center">
      <img src={require('./net-standard-architecture.png').default} alt="net-clr"/>
        <figcaption>Image Source: <a href="https://devblogs.microsoft.com/dotnet/introducing-net-standard/" target="_blank" rel="noopener noreferrer">.NET Blog</a></figcaption>
</div>
<br/>

<details>
  <summary><b>What is .NET Standard?</b></summary>
  <div>
    <div>.NET Standard was a set of APIs (Application Programming Interfaces) and specifications that aimed to provide a common set of functionalities across different .NET platforms.<br/><br/>
    .NET Standard is a specification, and different .NET implementations must declare their compliance with a specific version of .NET Standard. This ensures that applications and libraries can be confident about the availability of certain APIs across different platforms.<br/><br/>
    For example, if you developed a library targeting .NET Standard 2.0, it could be used in applications targeting .NET Core 2.0, .NET Framework 4.6.1, Xamarin.iOS 10.0, and more, as long as those platforms implemented .NET Standard 2.0.<br/><br/>
      <div align="center">
        <img src={require('./net-standard.png').default} alt="net-clr"/>
          <figcaption>Image Source: <a href="https://dotnet.microsoft.com/en-us/platform/dotnet-standard" target="_blank" rel="noopener noreferrer">dotnet</a></figcaption>
      </div>
    </div>
    <br/>
    <details>
      <summary><b>Key Components of .NET Standard</b></summary>
      <details>
        <summary><b>API Definition</b></summary>
        <div>.NET Standard defines a set of APIs that must be available in any .NET Standard-compliant implementation. These APIs cover a broad range of functionalities, including file I/O, networking, threading, collections, and more.
        </div>
      </details>
      <details>
        <summary><b>Versioning</b></summary>
        <div> .NET Standard is versioned, and each version specifies a set of APIs that are available. Higher versions include all APIs from lower versions and may introduce new APIs. This versioning allows developers to target a specific version of .NET Standard based on their compatibility requirements.
        </div>
      </details>
      <details>
        <summary><b>Cross-Platform Compatibility</b></summary>
        <div>One of the primary goals of .NET Standard is to ensure cross-platform compatibility. It allows developers to build libraries or applications that can run on different .NET implementations, such as .NET Framework, .NET Core, and Xamarin.
        </div>
      </details>
      <details>
        <summary><b>NuGet Packages</b></summary>
        <div>.NET Standard APIs are typically distributed as NuGet packages. Developers can reference these packages in their projects to access the standard APIs. NuGet is the package manager for .NET, and it simplifies the process of managing dependencies.
        </div>
      </details>
      <details>
        <summary><b>Portability Analyzer</b></summary>
        <div>Developers can use tools like the .NET Portability Analyzer to determine the level of compatibility of their code with a specific version of .NET Standard. This helps in assessing whether the code can be easily ported to different .NET platforms.
        </div>
      </details>
    </details>
  </div>
</details>

It's important to note that .NET Standard served its purpose in reducing fragmentation, but with the release of .NET 5 and later versions, Microsoft shifted towards a unified platform called ".NET" that includes various workloads (e.g., ASP.NET, WinForms, Console, etc.). As a result, .NET Standard is no longer actively maintained or updated, and developers are encouraged to target specific platforms directly using the unified APIs provided by the latest versions of .NET.

## .NET Framework vs .NET Core

.NET Framework and .NET Core are two different .NET implementations, each catering to distinct development scenarios. In this comprehensive comparison, we delve into the technical intricacies of both .NET and .NET Core across various aspects, application models, installation processes, microservices support, cross-platform capabilities, APIs, performance, security, and much more. The following table encapsulates the nuanced differences between these two frameworks.

| Feature / Aspect                            | .NET Framework                                                                                                                                                                                                                                                            | .NET Core                                                                                                                                                                                                                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API**                                     | Windows-centric APIs provide seamless integration with Windows-specific functionalities, making it an excellent choice for applications deeply tied to the Windows ecosystem. Developers can leverage a rich set of libraries and tools tailored for Windows development. | Takes a standardized and platform-agnostic approach with its APIs, allowing developers to write code that is not bound to a specific operating system. This facilitates cross-platform compatibility, enabling the creation of applications for Windows, Linux, and macOS. |
| **Application Models**                      | Excels in building Windows-centric applications, offering a comprehensive framework for the development of desktop and server applications on the Windows platform.                                                                                                       | Introduces a more modular and lightweight approach, expanding its capabilities to support cross-platform development. It enables developers to build applications that run seamlessly on Windows, Linux, and macOS, fostering versatility in application deployment.       |
| **CI/CD Integration**                       | Applications may require additional configurations for smooth integration with Continuous Integration/Continuous Deployment (CI/CD) pipelines, potentially leading to more complex build and deployment processes.                                                        | Simplifies CI/CD integration with built-in support for popular tools like Jenkins, Azure DevOps, and GitHub Actions. This streamlined integration enhances the development workflow, making it easier for developers to implement efficient CI/CD practices.               |
| **CLI Tools**                               | Relies on Visual Studio and may have limited support for command-line interfaces.                                                                                                                                                                                         | Emphasizes command-line interfaces, providing a rich set of CLI tools for development, testing, and deployment. This CLI-centric approach enhances automation and facilitates efficient development practices.                                                             |
| **CLR Tools**                               | Relies on the Common Language Runtime (CLR), a Windows-centric runtime environment that executes and manages applications written in languages like C# and VB.NET.                                                                                                        | Features a modular CLR designed for cross-platform execution. This modularity enhances flexibility, enabling applications to run on various platforms without being tied to the traditional Windows-specific runtime environment.                                          |
| **Community and Community Support**         | Boasts an established community with strong Windows-centric support. Developers benefit from a wealth of resources and expertise in Windows application development.                                                                                                      | It's open-source nature has fostered a diverse and vibrant community that extends beyond Windows. This cross-platform support in the community provides a rich pool of knowledge and solutions for developers working on different operating systems.                      |
| **Community-Driven Extensions and Tooling** | Relies on Microsoft-provided tools and extensions, often following a more centralized development model.                                                                                                                                                                  | Encourages a community-driven approach to extensions and tooling. The open-source ecosystem facilitates the creation of diverse tools and extensions, empowering developers with a broader set of options beyond the official offerings.                                   |
| **Cross-Platform Support**                  | Has limited cross-platform capabilities, primarily catering to Windows environments.                                                                                                                                                                                      | Takes a significant leap in cross-platform development, supporting Windows, Linux, and macOS. This enables developers to create applications that seamlessly run on various operating systems, providing flexibility in deployment.                                        |
| **Deployment Model**                        | Applications may involve complex setups and dependencies, potentially leading to challenges in managing dependencies and versioning issues.                                                                                                                               | Simplifies the deployment process with a self-contained deployment model. This model bundles necessary dependencies with the application, streamlining deployment and reducing the overall footprint on the target system.                                                 |
| **Ecosystem and Library Compatibility**     | Boasts a mature ecosystem with a vast array of libraries and third-party tools. However, compatibility with the latest framework versions may pose challenges for some libraries.                                                                                         | Benefits from a growing ecosystem, leveraging NuGet packages and supporting modern libraries. Its modular architecture promotes better library compatibility, encouraging the development of cross-platform libraries.                                                     |
| **Installation**                            | The installation process of the full .NET Framework can be extensive, requiring a complete runtime installation on the target system.                                                                                                                                     | .NET Core introduces a more streamlined installation process with smaller runtime packages. This reduces the installation footprint and makes the process quicker and more straightforward.                                                                                |
| **Innovation and Future Development**       | May see slower adoption of new features due to its established nature and release cycles.                                                                                                                                                                                 | Embraces faster innovation cycles, regularly introducing updates and embracing emerging technologies swiftly. This agile development approach positions .NET Core at the forefront of modern application development.                                                      |
| **Microservices Support**                   | Conducive to monolithic applications, and while microservices can be implemented, it may require additional effort.                                                                                                                                                       | Designed with microservices in mind, offering features like lightweight containers, improved performance, and better modularity for building scalable and distributed systems.                                                                                             |
| **Modern Development Practices**            | Being established earlier, may have limitations in adopting some modern development practices, such as containerization and serverless architectures.                                                                                                                     | Aligns with contemporary development trends, offering native support for containerization through Docker and enabling developers to build serverless applications using technologies like Azure Functions.                                                                 |
| **Packaging and Shipping**                  | Applications may have dependencies on the installed runtime, potentially leading to version conflicts.                                                                                                                                                                    | Applications can be packaged as standalone executables or as platform-specific packages, reducing deployment complexities and minimizing potential version conflicts.                                                                                                      |
| **Performance and Scalability**             | While .NET Framework provides robust performance, it may be considered heavier compared to .NET Core.                                                                                                                                                                     | .NET Core is renowned for its high performance, faster startup times, and efficient resource utilization. Its modular architecture facilitates scalability, making it well-suited for microservices-based architectures.                                                   |
| **Portability and Framework Versioning**    | Applications may face challenges when it comes to portability due to platform-specific dependencies.                                                                                                                                                                      | Excels in portability, allowing developers to create applications that can run seamlessly across different platforms. Improved versioning strategies minimize compatibility issues, facilitating the adoption of the latest features.                                      |
| **Security**                                | Security model is robust but may be influenced by the underlying Windows security infrastructure.                                                                                                                                                                         | Focuses on enhancing security, with features like improved cryptography libraries and support for modern security practices. Its security enhancements make it well-suited for applications requiring strong security measures.                                            |

### When to Use Each

The evolution of the .NET ecosystem has led to the coexistence of two major frameworks: .NET Framework and .NET Core. Both frameworks offer powerful tools and libraries for building robust and scalable applications, but understanding when to use each is crucial for making informed development decisions.

#### When to Use .NET Framework

> - **_Integrated with Windows:_**
>
>   - .NET Framework comes bundled with Windows, making it the default choice for building Windows desktop applications and large-scale enterprise solutions. If your application aligns with Windows-centric technologies, .NET Framework is a natural fit.
>
> - **_Third-Party Libraries and NuGet Packages:_**
>
>   - If your project relies on third-party libraries or NuGet packages that are not yet compatible with .NET Core, sticking with .NET Framework is a pragmatic choice. Ensure that the necessary libraries are available for your chosen framework.
>
> - **_Technologies Not Yet Available in .NET Core:_**
>
>   - .NET Core may not support all the technologies available in .NET Framework. For instance, if your project involves ASP.NET Web Forms, ASP.NET SignalR, or Windows Presentation Foundation (WPF), .NET Framework remains the more suitable option.
>
> - **_Already in Use:_**
>
>   - If your existing application is built on .NET Framework and you're not planning a migration, it may be more practical to extend the application within the current framework. New components or services can be developed using the latest technologies like ASP.NET Core.
>
> - **_Legacy Technologies:_**
>
>   - If your project involves technologies that are not yet available in .NET Core, such as workflow-related services, WCF services, or specific aspects of ASP.NET, sticking with .NET Framework is the pragmatic choice.

#### When to Use .NET Core

> - **_Cross-Platform Needs:_**
>
>   - .NET Core is the go-to choice when your application demands cross-platform compatibility. It supports Windows, Linux, and macOS, making it an excellent choice for developers working in diverse environments.
>   - Compatible development tools like Visual Studio and Visual Studio Code are available on multiple platforms, facilitating seamless development.
>
> - **_Microservices Architecture:_**
>
>   - If your project involves microservices architecture, .NET Core shines. Its lightweight nature, scalability, and support for various technologies make it an ideal framework for building modular business services.
>   - The ability to deploy independent microservices facilitates easier maintenance and updates, enhancing overall system agility.
>
> - **_Docker Containerization:_**
>
>   - .NET Core is well-suited for containerized environments, especially when working with Docker containers. Its modular structure allows for efficient deployment and management of applications within containers.
>   - Compared to .NET Framework, .NET Core offers a smaller image size, making it more suitable for containerized deployments.
>
> - **_High-Performance and Scalability:_**
>
>   - For applications with high-performance and scalability requirements, Microsoft recommends using .NET Core in conjunction with ASP.NET Core. This combination ensures optimal performance.
>   - The efficiency gained translates to a better user experience and cost savings, making .NET Core a compelling choice for performance-critical applications.
>
> - **_Multiple .NET Versions Side-by-Side:_**
>
>   - When running multiple .NET versions side-by-side on the same server, .NET Core is the preferred choice. It allows developers to install applications with dependencies on different versions of frameworks, ensuring compatibility and flexibility.
>
> - **_Command Line Interface (CLI) Control:_**
>
>   - Developers who prefer lightweight editors and command line control will find .NET Core appealing. It provides a CLI for all supported platforms, requiring minimal installation on production machines.
>   - The flexibility to switch to a full-fledged IDE, such as Visual Studio, adds versatility to the development workflow.

Choosing between .NET Framework and .NET Core depends on various factors such as platform requirements, performance needs, application types, and the state of the existing codebase. While .NET Core is the future of the .NET ecosystem and offers numerous advantages, there are situations where .NET Framework remains a valid and practical choice.

Evaluate your project's specific needs and constraints, and you can make an informed decision based on the factors outlined in this guide.

### .NET Core's Performance Secret

.NET Core exhibits superior performance compared to the traditional .NET Framework due to several architectural and design decisions aimed at optimizing resource usage and enhancing execution speed. Here are key factors contributing to the performance gains of .NET Core:

- #### Cross-Platform and Modular Design:

  Designed with cross-platform compatibility in mind, .NET Core follows a modular architecture. Developers can include only the necessary components for their applications, reducing the overall footprint. This modular design allows for more efficient resource utilization, making .NET Core more lightweight and performant.

- #### Optimized Just-In-Time (JIT) Compilation:

  Implements an improved version of the JIT compiler, known as [`RyuJIT`](https://devblogs.microsoft.com/dotnet/the-ryujit-transition-is-complete/). RyuJIT introduces better optimizations, resulting in faster code execution. It generates highly optimized machine code, leading to enhanced performance across various workloads.

- #### Runtime Enhancements:

  Introduces improvements to the runtime components, such as the CoreCLR. These enhancements include better garbage collection strategies, more efficient memory management, and optimized thread handling, all of which contribute to overall performance gains.

  <br/>
  <div align="center">
    <img src={require('./net-framework-vs-core.png').default} alt="net-clr"/>
      <figcaption>Image Source: <a href="https://stackify.com/net-ecosystem-runtime-tools-languages/" target="_blank" rel="noopener noreferrer">Stackify</a></figcaption>
  </div>
  <br/>

- #### Support for Asynchronous Programming:

  Places a strong emphasis on asynchronous programming patterns. The framework is designed to efficiently handle asynchronous operations, making it well-suited for scalable and responsive applications. Asynchronous programming can lead to better utilization of system resources and improved application responsiveness. While the .NET Framework also supports asynchronous programming, .NET Core's emphasis on this aspect, combined with other optimizations, contributes to better performance in scenarios where parallel and asynchronous execution is crucial.

- #### Microservices and Containerization:

  With the rise of microservices architectures and containerization, .NET Core has been engineered to excel in these environments. Its modular design and lightweight nature make it well-suited for building and deploying microservices. Containerization support allows for efficient resource utilization and rapid scaling, enhancing performance in cloud-native applications.

- #### Performance Tuning Tools:

  .NET Core provides better tools and diagnostics for performance monitoring and optimization. This allows developers to identify and address performance bottlenecks more effectively. Developers can use tools like PerfView, dotTrace, and others to identify and address performance issues.

### JIT and AOT

In the context of .NET, AOT (Ahead-of-Time Compilation) and JIT (Just-In-Time Compilation) refer to different compilation strategies used to convert high-level code into machine code that can be executed by the computer's hardware. These strategies have varying impacts on the performance of applications developed using .NET Core and .NET Framework.

- #### JIT (Just-In-Time) Compilation:

  When a .NET application is compiled, the source code is translated into an intermediate language called Common Intermediate Language (CIL) or simply Intermediate Language (IL).
  IL is a low-level, platform-agnostic representation of the code that can be executed by the Common Language Runtime (CLR).
  Rather than compiling the entire application to native machine code during the build process, .NET applications are distributed with their IL code.
  When the application is run, the CLR (Common Language Runtime) dynamically compiles the IL code into native machine code that is specific to the host system's architecture.
  This dynamic compilation occurs "just-in-time" before the code is executed.

| **JIT**                  | **.NET Core**                                                                                                                                                                                                                                                                             | **.NET Framework**                                                                                                                                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Compilation**          | NET Core predominantly uses JIT compilation. The Just-In-Time compiler translates Intermediate Language (IL) code into native machine code at runtime, just before the application executes. This allows for platform-specific optimizations and adaptability to the underlying hardware. | Like .NET Core, the traditional .NET Framework also relies on JIT compilation. The process occurs dynamically during program execution.                                                                              |
| **Performance Benefits** | JIT compilation can result in optimized code tailored to the specific environment where the application is running. This can lead to improved performance as the compiler can take advantage of the target machine's architecture and capabilities.                                       | JIT compilation in .NET Framework allows for adaptability, but it may introduce some startup latency as the compilation occurs at runtime. In scenarios where startup time is critical, this can be a consideration. |

- #### AOT (Ahead-Of-Time) Compilation:

  AOT refers to the compilation strategy where the code is translated from a high-level language (such as C# in the case of .NET) directly into native machine code during the build process, ahead of the application's execution.

| **AOT**                  | **.NET Core**                                                                                                                                                                                                                                                                                                                                               | **.NET Framework**                                                                                                                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Compilation**          | While .NET Core primarily uses JIT compilation, there are scenarios where Ahead-of-Time compilation is employed. For example, .NET Core applications can be compiled ahead of time into native machine code using tools like .NET Native. This AOT compilation can be beneficial for reducing startup times and improving performance in certain scenarios. | .NET Framework has limited support for AOT compilation. The use of NGEN (Native Image Generator) allows developers to create native images ahead of time for some assemblies. However, it doesn't cover the entire application, and the benefits are not as extensive as in .NET Core. |
| **Performance Benefits** | AOT compilation can eliminate the need for JIT compilation at runtime, leading to faster startup times. This can be crucial in scenarios where rapid application launch is essential, such as in mobile or serverless environments.                                                                                                                         | While NGEN can help in reducing startup time for specific assemblies, the overall impact on performance may be less pronounced compared to .NET Core's AOT capabilities.                                                                                                               |

Alright, let's break it down. When you're working with .NET, deciding between JIT and AOT compilation is a big deal. So, here's the deal: JIT compiles your code on the go, as it runs, in both .NET Core and .NET Framework. It's adaptable to your hardware, which is cool. On the flip side, AOT compilation precompiles your code into machine language, scoring points for faster startup times. Now, here's where things get interesting. There are some considerations you should keep in mind when making this decision. We're talking about how fast your app starts up, whether it plays nice with your hardware, how much memory it chews up, and more. Let's get into those considerations:

| **Considerations**                | **JIT Compilation**                                                                                                                                             | **AOT Compilation**                                                                                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Startup Time**                  | - Introduces startup latency as code is compiled at runtime.- Fast startup times crucial for scenarios like serverless computing or containerized environments. | - Significantly reduces startup time by precompiling code into native machine code.                                                                                   |
| **Adaptability and Optimization** | - Offers adaptability to the underlying hardware.- Potential for runtime optimizations.                                                                         | - Provides extensive optimization during compilation phase.- May lack adaptability to runtime changes.                                                                |
| **Memory Usage**                  | - Can lead to higher memory usage as both IL code and native code coexist in memory.                                                                            | - May result in more efficient memory usage as the native code is generated ahead of time.                                                                            |
| **Runtime Performance**           | - Allows for platform-specific optimizations, potentially leading to better runtime performance.                                                                | - Offers optimized performance due to extensive precompilation.                                                                                                       |
| **Binary Size**                   | - Generates machine code tailored to the specific platform at runtime, resulting in potentially smaller binaries.- Binary size depends on the platform.         | - May result in larger binaries due to precompiled machine code.- Binary size is generally larger and may depend on the specific AOT tool used and its configuration. |
| **Development Workflow**          | - Simplifies development workflow by allowing late binding and dynamic loading of assemblies.                                                                   | - Requires additional considerations during development due to the need for precompilation.                                                                           |

## The Current Support Policy

<div align="center">
    <img src={require('./net-release-schedule.png').default} alt="net-clr"/>
      <figcaption>Image Source: <a href="https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core" target="_blank" rel="noopener noreferrer">dotnet</a></figcaption>
</div><br/>

.NET, Microsoft's toolkit, has a life cycle, starting from when it's born to when it retires. There are two types of versions: Long-Term Support (LTS) for stability (3 years of support) and Standard Term Support (STS) for the latest features (18 months of support).

Imagine a family album with versions like .NET 8 and .NET 7, showing when they were born and when they retire. Some, like .NET 5, have retired.

There are also preview releases (not for regular use) and Go-Live releases (for production). Every November, there's a big release – even-numbered ones for stability, odd-numbered for excitement.

Joining the LTS or STS club means keeping your software up-to-date. Patch updates are like vitamins, bundled up every month on "Patch Tuesday."

Updates are active for a while, improving functionality. The last 6 months focus on security – the retirement plan for software.

End of Life (EOL) is when Microsoft stops helping. It's like saying bye to an old friend for a newer version.

.NET's support policy includes ASP.NET Core 2.1 on .NET Framework, following ASP.NET Support rules. It works on various operating systems, and Windows users get automatic patching.

Understanding the support policy helps your .NET projects stay healthy.

## Conclusion

The evolution of .NET —from Framework to Core— reflects a commitment to adaptability and innovation. .NET Framework laid the foundation for Windows development, .NET Core expanded the horizons with cross-platform capabilities, and .NET Standard served as the glue to unite the ecosystem. As we move forward, Microsoft has further streamlined the .NET landscape with the introduction of .NET 5 and beyond, unifying the best of .NET Framework and .NET Core into a single, versatile platform. The journey of .NET continues, promising a future of powerful, cross-platform development for the global developer community.

Thank you for reading. If you were confused before reading this article, I hope this article was useful to you and cleared up your confusion. I am open to all your criticisms and thoughts, if you think there is a missing/wrong/improvable part, do not forget to comment :)
