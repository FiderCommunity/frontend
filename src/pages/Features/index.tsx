import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Card, Image, Name } from './styles';
import api from '../../services/api';

interface Feature {
  id: number,
  number: number,
  title: string,
  description: string,
  tags: string[],
  createdAt: string,

  votesCount: number,
  commentsCount: number,
  
  user: PostUser,
  projectName: string,

  postURL: string
}

interface PostUser {
  id: number,
  name: string,
  avatarURL: string
}

export const Features: React.FC = () => {
  const [features, setFeatures] = useState<Array<Feature>>([]);
  

  // useEffect(()=> {
  //     api.get("posts?&limit=10")
  //       .then(res => setFeatures(res.data))
  // }, []);

  useEffect(()=> {
        let responseFeatures: Feature[] = [
          {
            "id": 28198,
            "number": 386,
            "title": "moderation queue",
            "description": "allow moderators the ability to actively permit posts",
            "createdAt": "2021-09-22T18:21:33.115513Z",
            "user": {
              "id": 42474,
              "name": "Jeremy Hinshaw",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/42474/Jeremy%20Hinshaw"
            },
            "votesCount": 4,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/386"
          },
          {
            "id": 28094,
            "number": 382,
            "title": "Allow custom js",
            "description": "could be used to some small design and text changes and so on ... :)\n\nThink of sth like custom css, maybe with a security warning",
            "createdAt": "2021-09-17T10:19:49.799259Z",
            "user": {
              "id": 42270,
              "name": "Michael Wepf",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/42270/Michael%20Wepf"
            },
            "votesCount": 4,
            "commentsCount": 1,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/382"
          },
          {
            "id": 28228,
            "number": 387,
            "title": "Log user actions",
            "description": "Would like additional logging for tracking user actions.\nI.e. when a contributor edits a comment I would like to be able to know the specific user that edited that comment",
            "createdAt": "2021-09-23T17:08:38.643055Z",
            "user": {
              "id": 42508,
              "name": "t-900-a",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/42508/t-900-a"
            },
            "votesCount": 1,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/387"
          },
          {
            "id": 27824,
            "number": 376,
            "title": "profile picture not loading on Fider 0.19.0",
            "description": "Since we updated our Fider version to 0.19.0, the profile picture can't be loaded anymore. HTTP 404.\nAfter a downgrade back to 0.18.1, the picture is loading successfully again.",
            "createdAt": "2021-09-10T08:49:10.141773Z",
            "user": {
              "id": 39361,
              "name": "Thierry Peter",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/39361/Thierry%20Peter"
            },
            "votesCount": 4,
            "commentsCount": 1,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/376"
          },
          {
            "id": 28197,
            "number": 385,
            "title": "provide admin option to limit posting of pictures",
            "description": "",
            "createdAt": "2021-09-22T18:20:38.840172Z",
            "user": {
              "id": 42474,
              "name": "Jeremy Hinshaw",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/42474/Jeremy%20Hinshaw"
            },
            "votesCount": 1,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/385"
          },
          {
            "id": 27589,
            "number": 373,
            "title": "Allow html in Welcome Message",
            "description": "It would be great if it was possible to use html in the Welcome message for example to make nicer links (now pasting a full url works fine), bold text etc.",
            "createdAt": "2021-08-31T08:06:27.779031Z",
            "user": {
              "id": 41653,
              "name": "Max Flodén",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/41653/Max%20Flod%C3%A9n"
            },
            "votesCount": 4,
            "commentsCount": 3,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/373"
          },
          {
            "id": 27615,
            "number": 374,
            "title": "Custom domain support for Cloudflare",
            "description": "I noticed when setting up two Fider Cloud with custom domains that when I add the CNAME to my DNS which is Cloudflare and leave Proxy as on (default) I cannot reach my Fider site using the custom domain name, instead I reach the Cloudflare broken page:\n\nError 525 Ray ID: 68776658ed360b39 • 2021-08-31 15:47:52 UTC\nSSL handshake failed\nYou Browser Working\nOslo Cloudflare Working\n[www.custom.domain] Host Error\n\nHowever, if I turn Proxy off (\"DNS only\"), and then navigate to the page using my custom domain name it works fine. After that I can switch back to Proxy on and it still works.\n\nNot sure if this is a bug, a feature request or just something that should be documented somewhere.",
            "createdAt": "2021-09-01T15:03:55.546471Z",
            "user": {
              "id": 41653,
              "name": "Max Flodén",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/41653/Max%20Flod%C3%A9n"
            },
            "votesCount": 4,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/374"
          },
          {
            "id": 28019,
            "number": 380,
            "title": "Associating Multiple Projects",
            "description": "Hey everyone,\n\nI'm doing a survey, for a college class, on the open source community's feature request process.\n\nDuring the research I came across Fider, and I thought about the possibility of extending the tool so that it would be possible to associate/group several instances that belong to the same community.\n\nWith this it would be possible:\n- Display fider projects of one community.\n- Search and filter, centrally, all feature requests.\n- Maybe even centralize the login process, so one would have to login just \"on the community\" and be able to request features in all projects (This is more an idea, still didn't figure out how it could be done)\n\nIt's related to this post: https://feedback.fider.io/posts/268/one-instance-of-fider-with-the-ability-to-add-multiple-products\n\nBut the core difference is that it would be another software that gathers multiple Fider instances in one place.\n\nGot some sketches of how it would look like:\n\nI'm curious to know if this idea has already been discussed, if  it is viable and if anyone has inputs.",
            "createdAt": "2021-09-14T14:18:21.735554Z",
            "user": {
              "id": 38486,
              "name": "Bernardo Henrique Rosa Lima",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/38486/Bernardo%20Henrique%20Rosa%20Lima"
            },
            "votesCount": 1,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/380"
          },
          {
            "id": 27037,
            "number": 366,
            "title": "Make a campaign mode",
            "description": "Allow a campaign mode : sometimes you want to crowdsource your users on a specific topic (ie, recent exemple for me : choose a name for a team)\nAllow an admin to create a topic with a specific url. Allow this topic to have a status (open / closed = archived)",
            "createdAt": "2021-08-07T09:16:10.45022Z",
            "user": {
              "id": 41107,
              "name": "Romain Alberich",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/41107/Romain%20Alberich"
            },
            "votesCount": 8,
            "commentsCount": 1,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/366"
          },
          {
            "id": 26936,
            "number": 363,
            "title": "Packaged for CLOUDRON",
            "description": "This is a very good app for cloudron and could make installing easy. I was going to add the manifest stuff myself but thought I would post here incase there is any interest. \nhttps://docs.cloudron.io",
            "createdAt": "2021-07-31T17:15:32.235761Z",
            "user": {
              "id": 40951,
              "name": "Jason Johnson",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/40951/Jason%20Johnson"
            },
            "votesCount": 7,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/363"
          },
          {
            "id": 23751,
            "number": 316,
            "title": "Private Ideas",
            "description": "We have staff submit ideas and these should be able to be set \"Private\", so they can be reviewed and released to the public.\n\nThis would be an extension of the \"Private\" site idea.",
            "createdAt": "2021-03-09T17:36:15.437711Z",
            "user": {
              "id": 37421,
              "name": "James O'Hara",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/37421/James%20O%27Hara"
            },
            "votesCount": 11,
            "commentsCount": 1,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/316"
          },
          {
            "id": 12092,
            "number": 174,
            "title": "Make it possible for admins to approve ideas before they get public",
            "description": "Some users may spam with unrelated ideas. An option for an admin to approve all ideas before they get public could help this.",
            "createdAt": "2019-03-07T08:51:57.234745Z",
            "user": {
              "id": 14875,
              "name": "Micke Prag",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/14875/Micke%20Prag"
            },
            "votesCount": 40,
            "commentsCount": 4,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/174"
          },
          {
            "id": 24962,
            "number": 339,
            "title": "Alllow a user to see her/his own post/commets in an overview",
            "description": "The notifications can become quite chaotic.",
            "createdAt": "2021-05-16T13:41:42.71863Z",
            "user": {
              "id": 39031,
              "name": "Michael Pohl",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/39031/Michael%20Pohl"
            },
            "votesCount": 3,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/339"
          },
          {
            "id": 20191,
            "number": 246,
            "title": "Sign in with Apple",
            "description": "https://developer.apple.com/documentation/sign_in_with_apple",
            "createdAt": "2020-04-13T20:40:12.942066Z",
            "user": {
              "id": 30229,
              "name": "Alexsander Akers",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/30229/Alexsander%20Akers"
            },
            "votesCount": 18,
            "commentsCount": 0,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/246"
          },
          {
            "id": 2182,
            "number": 82,
            "title": "Allow users to mention/tag other users",
            "description": "Sometimes, users wish to be able to tag other users in a conversation as a means of replying or referring to someone else's comment. It would be nice if users could do so, perhaps by typing @ and then showing an auto-complete list of users to \"tag\".\n\nThis would go well with the [threaded replies](https://feedback.fider.io/ideas/16/threaded-comments-on-ideas) idea posted a while ago, though not strictly related.",
            "createdAt": "2018-04-03T14:38:32.284695Z",
            "user": {
              "id": 1524,
              "name": "dodgepong",
              "avatarURL": "https://feedback.fidercdn.com/static/avatars/gravatar/1524/dodgepong"
            },
            "votesCount": 46,
            "commentsCount": 4,
            "tags": [],
            "projectName": "Fider",
            "postURL": "https://feedback.fider.io/posts/82"
          }
        ]
        setFeatures(responseFeatures)
}, []);
  
  return (
    <>
      <Header></Header>

      <Container>
        <ul>
          {features.map(feature => {
                return <Card key={feature.projectName + feature.id}>
                  <a href={feature.postURL}>
                    <Image src={feature.user.avatarURL} alt="Community Image" ></Image>
                    <Name>{feature.title}</Name>
                  </a>
                </Card>
          })}
        </ul>
      </Container>
    </>
  );
};

export default Features;
