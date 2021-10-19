# nodeapi

To initiate 
-yarn i

to create DB 
-yarn prisma migration dev

to vizualize DB 
-yarn prisma studio

#Routes

-http://localhost:4000/profile
expected {Bearer token}

-http://localhost:4000/messages/last3
expected 


-http://localhost:4000/messages
expected 
json{
	"message": "any message",
	"user_id": "any user_id"
}, 
{Bearer token}


-http://localhost:4000/auth
expected json{
	"code": "4fa3b09613f925b26549"
}

-Get the code on the rote http://localhost:4000/github
-It will be returned on route http://localhost:4000/signin/callback


