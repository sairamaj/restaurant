## RestAPI Guidelines

[quick introduction](https://www.geeksforgeeks.org/rest-api-introduction/)

* Resource
  * Information that can be named and accessed via a URI, and is accessed through a common interface based on the HTTP standard methods
________

* Steps in designing
  * Identify the object model which will be exposed as resources in the API
    * menuitem, customer , order, payment
  * Create resource URIs
    * Decide the URIs. Use **nouns** in the resource paths and name collections with **plural names**
	  * api.example/customers , api.example/orders/id api.example/payments/id
  * Representation (Json/Xml)
    * Usually json now-a-days.
	```json
	{
	  "id": "12345",
	  "name": "firstname lastname",
	  "email": "firstname@test.com",
	  "address": {
	     "address1" : "address 1",
		 "address2" : "address 2",
		 "city": "city",
		 "state": "state",
		 "zipcode": 97006
	  }
	}
	```
	
  * Assign Http Method
    * GET to retrieving, POST to create etc.,
	```txt
		GET /customers         get all customers
		GET /customers/123456  get a particular customer
		POST / customer    create new customer
		PUT /customer/id   updating existing customer
	```
   * [quick design tips](https://www.restapitutorial.com/lessons/restquicktips.html)
   * [Best practices](https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/)
   * [Naming resources](https://restfulapi.net/resource-naming/)
   * [Versioning](https://restfulapi.net/versioning/)
   * [Long Running](https://restfulapi.net/rest-api-design-for-long-running-tasks/)
   * [Status Codes](https://restfulapi.net/rest-api-design-for-long-running-tasks/)
   * [Designing Ids]()
   * [Problem Details]()
   * How to identify resources?
     * Analyze your use cases to find domain nouns that can be operated using “create,” “read,” “update,” or “delete” operations.
	 * Designate each noun as a resource.
     * Use HTTP methods such as POST, GET, PUT, and DELETE to implement “create,” “read,” “update,” and “delete” operations, respectively, on each resource 1.
   * Domain-driven design (DDD) is a software development approach that emphasizes the importance of understanding the business domain. DDD helps to identify the domain nouns that can be operated using “create,” “read,” “update,” or “delete” operations, and designates each noun as a resource. The domain model acts as a ubiquitous language to help communication between software developers and domain experts 1.
     * In terms of RESTful API design, DDD can be used to model domain behavior to a RESTful API, based on DDD concepts. The domain model can be used to describe a business resource, and how client systems interact with it. It can detail operations, methods, paths, and status codes. The REST model is a refinement and/or abstraction of the domain data model with a focus on interoperability 23.

______

* Idempotent
* Domain
* Constraints
  * Uniform interface
    * The uniform interface constraint defines the interface between clients and servers. It simplifies and decouples the architecture, which enables each part to evolve independently. The four guiding principles of the uniform interface are
  * Stateless
  * Cacheable
  * Client-Server
  * Layered System

* Producing a great API is 80% art and 20% science
* Design [resource](https://www.restapitutorial.com/lessons/restquicktips.html)
  * Use identifiers in your URLs instead of in the query-string. Using URL query-string parameters is fantastic for filtering, but not for resource names
  * Leverage the hierarchical nature of the URL to imply structure.
  * Design for your clients, not for your data.
  * Resource names should be nouns. Avoid verbs as resource names, to improve clarity. Use the HTTP methods to specify the verb portion of the request.
  * Use plurals in URL segments to keep your API URIs consistent across all HTTP methods, using the collection metaphor.
    * Recommended: /customers/33245/orders/8769/lineitems/1
    * Not: /customer/33245/order/8769/lineitem/1
  * Use lower-case in URL segments, separating words with underscores ('_') or hyphens ('-'). Some servers ignore case so it's best to be clear.
  * Keep URLs as short as possible, with as few segments as makes sense.

## Status Codes [resource](https://www.restapitutorial.com/lessons/restquicktips.html)
* 200 OK
  * General success status code. This is the most common code. Used to indicate success.
* 201 CREATED
  * Successful creation occurred (via either POST or PUT). Set the Location header to contain a link to the newly-created resource (on POST). Response body content may or may not be present.
* 204 NO CONTENT
  * Indicates success but nothing is in the response body, often used for DELETE and PUT operations.
* 400 BAD REQUEST
  * General error for when fulfilling the request would cause an invalid state. Domain validation errors, missing data, etc. are some examples.
* 401 UNAUTHORIZED
  * Error code response for missing or invalid authentication token.
* 403 FORBIDDEN
  * Error code for when the user is not authorized to perform the operation or the resource is unavailable for some reason (e.g. time constraints, etc.).
* 404 NOT FOUND
  * Used when the requested resource is not found, whether it doesn't exist or if there was a 401 or 403 that, for security reasons, the service wants to mask.
* 405 METHOD NOT ALLOWED
  * Used to indicate that the requested URL exists, but the requested HTTP method is not applicable. For example, POST /users/12345 where the API doesn't support creation of resources this way (with a provided ID). The Allow HTTP header must be set when returning a 405 to indicate the HTTP methods that are supported. In the previous case, the header would look like "Allow: GET, PUT, DELETE"
* 409 CONFLICT
  * Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries, such as trying to create two customers with the same information, and deleting root objects when cascade-delete is not supported are a couple of examples.
* 500 INTERNAL SERVER ERROR
  * Never return this intentionally. The general catch-all error when the server-side throws an exception. Use this only for errors that the consumer cannot address from their end.

## Consider Connectedness
One of the principles of REST is connectedness—via hypermedia links (search HATEOAS). While services are still useful without them, APIs become more self-descriptive and discoverable when links are returned in the response. At the very least, a 'self' link reference informs clients how the data was or can be retrieved. Additionally, utilize the HTTP Location header to contain a link on resource creation via POST (or PUT). For collections returned in a response that support pagination, 'first', 'last', 'next' and 'prev' links at a minimum are very helpful.

* Paging, Filtering, Sorting
* Versioning
* Chatty vs Chunky
* Links
* N+1 problem
* Headers/Body/Query parameters
_____

## [Explore APIs]
  * Google, Microsoft, Github 
______
## Resources
[React CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/)
[React Tutorial at W3schools](https://www.w3schools.com/REACT/DEFAULT.ASP)


## Examples

### Library management

Certainly! Here are some of the functional requirements that a library management system should have:

Cataloging and Classification: The system should facilitate efficient cataloging and classification of library resources, including books, journals, multimedia, and other materials. It must support standard classification schemes like Dewey Decimal Classification (DDC) and Library of Congress Classification (LCC).
Search and Retrieval: A user-friendly search interface is crucial to enable patrons to find and access resources quickly. The system should support various search criteria, such as title, author, subject, and keywords, providing relevant results with minimum effort.
Circulation Management: The system must handle the circulation of library materials, including check-in, check-out, renewals, and holds. It should track due dates, manage fines, and provide alerts for overdue items.
User Management: User accounts and profiles should be managed effectively, allowing library staff to register new users, update information, and maintain records of borrowing history.
Acquisition and Budget Management: The system should assist in the acquisition process, managing purchase orders, invoices, and vendor information. It should also support budget tracking to ensure efficient resource allocation.
Serials Management: For libraries with periodical subscriptions, the system should handle serials management, including subscription details, issues, and renewals.
Interlibrary Loan (ILL): The system should facilitate interlibrary loan requests, enabling seamless resource sharing between libraries.
Digital Resource Management: With the proliferation of digital content, the system should manage electronic resources, such as e-books, e-journals, and databases.
Reporting and Analytics: Comprehensive reporting features are essential to analyze library usage, collection trends, and user behavior, aiding in data-driven decision-making.
[some examples](https://github.com/BassemGhoniem/simpleLibAPI)
[another example](https://www.javaguides.net/2023/08/library-management-system-project-using-spring-boot.html)
_____


