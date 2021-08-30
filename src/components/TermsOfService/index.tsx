import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  root: {
    fontSize: 130,
    '@media (max-width: 576px)': {
      fontSize: 60,
    },
  },
  paragraph: {
    margin: Theme.spacing(4, 0),
  },
}))

const Terms = () => {
  const classes = useStyle()
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography color="primary" variant="h3" className={classes.root}>
        Terms of Service
      </Typography>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          Welcome
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Superchief Gallery NFT (“Superchief,” “we,” “us,” “our”) provides its
          marketplace and services (described below) to you (“you” or “User")
          through its website, platform, and marketplace located at
          www.Superchief.app (the “Platform”), subject to the following Terms of
          Service (as amended from time to time, the “Terms”). By signing up for
          an account on the Platform or otherwise using or accessing the
          Platform, you acknowledge that you have read and agree to these Terms.
          The Privacy Policy and all such additional terms, guidelines, and
          rules as set forth on the Platform are hereby incorporated by
          reference into these Terms and expressly agreed to and acknowledged by
          the User.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body1"
        >
          PLEASE READ THESE TERMS OF PLATFORM CAREFULLY, AS THEY CONTAIN AN
          AGREEMENT TO ARBITRATE AND OTHER IMPORTANT INFORMATION REGARDING YOUR
          LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. THE AGREEMENT TO ARBITRATE
          REQUIRES (WITH LIMITED EXCEPTION) THAT YOU SUBMIT CLAIMS YOU HAVE
          AGAINST US TO BINDING AND FINAL ARBITRATION, AND FURTHER (1) YOU WILL
          ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST SUPERCHIEF ON AN INDIVIDUAL
          BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR
          REPRESENTATIVE ACTION OR PROCEEDING, (2) YOU WILL ONLY BE PERMITTED TO
          SEEK RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF)
          ON AN INDIVIDUAL BASIS, AND (3) YOU MAY NOT BE ABLE TO HAVE ANY CLAIMS
          YOU HAVE AGAINST US RESOLVED BY A JURY OR IN A COURT OF LAW.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          We reserve the right, at our sole discretion, to change or modify
          portions of these Terms of Service at any time. If we do this, we will
          post the changes on this page and will indicate at the top of this
          page the date these terms were last revised. We will also notify you,
          either through the Platform user interface, in an email notification
          or through other reasonable means. Any such changes will become
          effective no earlier than fourteen (14) days after they are posted,
          except that changes addressing new functions of the Platform will be
          effective immediately. Your continued use of the Platform and after
          the date any such changes become effective constitutes your acceptance
          of the new Terms of Service.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          What is Superchief?
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Your Registration Obligations: Anyone can browse Superchief Gallery NFT without
          registering for an account. You may be required to register with
          Superchief Gallery NFT in order to access and use certain features on the
          Platform, such as participating as a Creator or Collector. If you
          choose to register for the Platform, you agree to provide and maintain
          true, accurate, current, and complete information about yourself as
          prompted by our registration form. Registration data and certain other
          information about you are governed by our Privacy Policy. You must be
          at least 13 years old to register for an account as a Creator, and at
          least 18 years old to place a bid on any Digital Artwork. If you are
          between 13 and 18 years old, you must have the expressed permission of
          a parent or legal guardian who can accept these Terms on your behalf.
          You are responsible for anything that occurs when anyone is signed in
          to your account, as well as the security of the account.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Member Account, Password, and Security: You are responsible for
          maintaining the confidentiality of your account and password, if any,
          and are fully responsible for any and all activities that occur under
          your password or account. You agree to (a) immediately notify
          Superchief Gallery NFT of any unauthorized use of your password or account or any
          other breach of security, and (b) ensure that you exit from your
          account at the end of each session when accessing Superchief Gallery NFT.
          Superchief Gallery NFT will not be liable for any loss or damage arising from your
          failure to comply with this Section.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Connecting your Wallet: In order to participate as a Creator or
          Collector in the marketplace, you must connect to a browser extension
          called MetaMask. MetaMask is an electronic wallet which allows you to
          purchase , store, and engage in transactions using the native Ethereum
          cryptocurrency, ETH. All transactions on Superchief Gallery NFT are in the native
          Ethereum cryptocurrency, ETH.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Modifications to the Platform: Superchief Gallery NFT reserves the right to modify
          or discontinue, temporarily or permanently, the Platform (or any part
          thereof) with or without notice. You agree that Superchief Gallery NFT will not be
          liable to you or to any third party for any modification, suspension,
          or discontinuance of the Platform.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          What are the rules for using Superchief Gallery NFT?
        </Typography>
        <ul>
          <Typography color="primary" component="li" variant="body2">
            manipulate the price of a Digital Artwork in any way, including
            bidding on your own items, preventing bidding, or using Superchief Gallery NFT
            to conceal economic activity.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            email or otherwise upload any content that (i) infringes any
            intellectual property or other proprietary rights of any party; (ii)
            you do not have a right to upload under any law or under contractual
            or fiduciary relationships; (iii) contains software viruses or any
            other computer code, files or programs designed to interrupt,
            destroy or limit the functionality of any computer software or
            hardware or telecommunications equipment; (iv) poses or creates a
            privacy or security risk to any person; (v) constitutes unsolicited
            or unauthorized advertising, promotional materials, commercial
            activities and/or sales, “junk mail,” “spam,” “chain letters,”
            “pyramid schemes,” “contests,” “sweepstakes,” or any other form of
            solicitation; (vi) is unlawful, harmful, threatening, abusive,
            harassing, tortious, excessively violent, defamatory, vulgar,
            obscene, pornographic, libelous, invasive of another’s privacy,
            hateful racially, ethnically or otherwise objectionable; or (vii) in
            the sole judgment of Superchief Gallery NFT, is objectionable or which restricts
            or inhibits any other person from using or enjoying the Platform, or
            which may expose Superchief Gallery NFT or its users to any harm or liability of
            any type;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            interfere with or disrupt the Platform or servers or networks
            connected to the Platform, or disobey any requirements, procedures,
            policies or regulations of networks connected to the Platform ; or{' '}
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            violate any applicable local, state, national or international law,
            or any regulations having the force of law, including but not
            limited to the U.S. Department of Treasury’s Office of Foreign
            Assets Control (“OFAC”), or which would involve proceeds of any
            unlawful activity;{' '}
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            impersonate any person or entity, or falsely state or otherwise
            misrepresent your affiliation with a person or entity;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            solicit personal information from anyone under the age of 18;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            harvest or collect email addresses or other contact information of
            other Users from the Platform by electronic or other means for the
            purposes of sending unsolicited emails or other unsolicited
            communications;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            advertise or offer to sell or buy any goods or services for any
            business purpose that is not specifically authorized;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            further or promote any criminal activity or enterprise or provide
            instructional information about illegal activities, including for
            the purpose of concealing economic activity, laundering money, or
            financing terrorism;{' '}
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            obtain or attempt to access or otherwise obtain any materials or
            information through any means not intentionally made available or
            provided for through the Platform;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            use any robot, spider, site search/retrieval application, or other
            device to retrieve or index any portion of the Platform or the
            content posted on the Platform, or to collect information about its
            Users for any unauthorized purpose;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            create user accounts by automated means or under false or fraudulent
            pretenses;{' '}
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            access or use the Platform for the purpose of creating a product or
            service that is competitive with any of our products or services.
          </Typography>
        </ul>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          How do I become a creator?
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Artists need an invitation or to become a Creator on Superchief Gallery NFT.
          Selling invitations in return for ETH or any other favor is strictly
          prohibited. If Superchief Gallery NFT becomes aware that any invitation is being
          sold to a third party, Superchief Gallery NFT may suspend or otherwise terminate
          your access to Superchief Gallery NFT.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Superchief Gallery NFT maintains complete discretion in selecting the artists in
          its marketplace, and makes no guarantees or promises that any artists
          will be approved as Creators even if Superchief Gallery NFT solicited the request.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          How do I become a creator?
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Creators Rights
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          The Creator owns all legal right, title, and interest in all
          intellectual property rights underlying the Digital Artwork minted by
          the Creator on the Platform, including but not limited to copyrights
          and trademarks. As the copyright owner, the Creator has the right to
          reproduce, prepare derivative Digital Artwork, distribute, and display
          or perform the Digital Artwork.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Creators hereby acknowledges, understands, and agrees that selling a
          Digital Artwork on Superchief Gallery NFT constitutes an express representation,
          warranty, and covenant that the Creator has not, will not, and will
          not cause another to sell, tokenize, or create another cryptographic
          token representing a digital collectible for the same Digital Artwork,
          excepting, without limitation, the Creator’s ability to sell,
          tokenize, or create a cryptographic token or other digital asset
          representing a legal, economic, or other interest relating to any of
          the exclusive rights belonging to the Creator under copyright law.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          The Creator hereby acknowledges, understands, and agrees that
          launching a Digital Artwork on Superchief Gallery NFT constitutes an express and
          affirmative grant to Superchief Gallery NFT, its affiliates and successors a
          non-exclusive, world-wide, assignable, sublicensable, perpetual, and
          royalty-free license to make copies of, display, perform, reproduce,
          and distribute the Digital Artwork on any media whether now known or
          later discovered for the broad purpose of operating, promoting,
          sharing, developing, marketing, and advertising the Platform, or any
          other purpose related to Superchief Gallery NFT, including without limitation, the
          express right to: (i) display or perform the Digital Artwork on the
          Platform, a third party platform, social media posts, blogs,
          editorials, advertising, market reports, virtual galleries, museums,
          virtual environments, editorials, or to the public; (ii) create and
          distribute digital or physical derivative Digital Artwork based on the
          Digital Artwork; (iii) indexing the Digital Artwork in electronic
          databases, indexes, catalogues; and (iv) hosting, storing,
          distributing, and reproducing one or more copies of the Digital
          Artwork within a distributed file keeping system, node cluster, or
          other database (e.g., IPFS) or causing, directing, or soliciting
          others to do so.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Creators expressly represent and warrant that their Digital Artwork
          listed on Superchief Gallery NFT contains only original content otherwise
          authorized for use by the Creator, and does not contain unlicensed or
          unauthorized copyrighted content, including any imagery, design,
          audio, video, human likeness, or other unoriginal content not created
          by the Creator, not authorized for use by the Creator, not in the
          public domain, or otherwise without a valid claim of fair use, the
          Creator further represents and warrants that it has permission to
          incorporate the unoriginal content.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Collectors Rights
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Collectors receive a cryptographic token representing the Creator’s
          Digital Artwork as a piece of property, but do not own the creative
          work itself. Collectors may display and share the Digital Artwork, but
          Collectors do not have any legal ownership, right, or title to any
          copyrights, trademarks, or other intellectual property rights to the
          Digital Artwork, excepting the limited license to the Digital Artwork
          granted by these Terms. Upon collecting a Digital Artwork, Collectors
          receive a limited, worldwide, non-assignable, non-sublicensable,
          royalty-free license to display the Digital Artwork legally owned and
          properly obtained by the Collector.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          The Collector’s limited license to display the Digital Artwork,
          includes, but is not limited to, the right to display the Digital
          Artwork privately or publicly: (i) for the purpose of promoting or
          sharing the Collector’s purchase, ownership, or interest, (ii) for the
          purpose of sharing, promoting, discussing, or commenting on the
          Digital Artwork; (iii) on third party marketplaces, exchanges,
          platforms, or applications in association with an offer to sell, or
          trade, the Digital Artwork; and (iv) within decentralized virtual
          environments, virtual worlds, virtual galleries, virtual museums, or
          other navigable and perceivable virtual environments.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Collectors have the right to sell, trade, transfer, or use their
          Digital Artwork, but Collectors may not make “commercial use” of the
          Digital Artwork.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          The Collector agrees that it may not, nor permit any third party, to
          do or attempt to do any of the foregoing without the Creator’s express
          prior written consent in each case: (i) modify, distort, mutilate, or
          perform any other modification to the Work which would be prejudicial
          to the Creator’s honor or reputation; (ii) use the Digital Artwork to
          advertise, market, or sell any third party product or service; (iii)
          use the Digital Artwork in connection with images, videos, or other
          forms of media that depict hatred, intolerance, violence, cruelty, or
          anything else that could reasonably be found to constitute hate speech
          or otherwise infringe upon the rights of others; (iv) incorporate the
          Digital Artwork in movies, videos, video games, or any other forms of
          media for a commercial purpose, except to the limited extent that such
          use is expressly permitted by these Terms or solely for your
          Collector’s personal, non-commercial use; (v) sell, distribute for
          commercial gain, or otherwise commercialize merchandise that includes,
          contains, or consists of the Digital Artwork; (vi) attempt to
          trademark, copyright, or otherwise acquire additional intellectual
          property rights in or to the Digital Artwork; (vii) attempt to mint,
          tokenize, or create an additional cryptographic token representing the
          same Digital Artwork, whether on or off of the Superchief Gallery NFT Platform;
          (viii) falsify, misrepresent, or conceal the authorship of the Digital
          Artwork; or (ix) otherwise utilize the Digital Artwork for the
          Collector’s or any third party’s commercial benefit.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Collectors irrevocably release, acquit, and forever discharge
          Superchief Gallery NFT and its subsidiaries, affiliates, officers, and successors
          of any liability for direct or indirect copyright or trademark
          infringement for Superchief Gallery NFT use of a Digital Artwork in accordance
          with these Terms.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Platform Content, Software and Trademarks: You acknowledge and agree
          that the Platform may contain content or features (“Platform Content”)
          that are protected by copyright, patent, trademark, trade secret or
          other proprietary rights and laws. Except as expressly authorized by
          Superchief Gallery NFT, you agree not to modify, copy, frame, scrape, rent, lease,
          loan, sell, distribute or create derivative works based on the
          Platform or the Platform Content, in whole or in part. In connection
          with your use of the Platform you will not engage in or use any data
          mining, robots, scraping or similar data gathering or extraction
          methods. If you are blocked by Superchief Gallery NFT from accessing the Platform
          (including by blocking your IP address), you agree not to implement
          any measures to circumvent such blocking (e.g., by masking your IP
          address or using a proxy IP address). Any use of the Platform or the
          Platform Content other than as specifically authorized herein is
          strictly prohibited. The technology and software underlying the
          Platform or distributed in connection therewith are the property of
          Superchief Gallery NFT, our affiliates and our partners (the “Software”). You
          agree not to copy, modify, create a derivative work of, reverse
          engineer, reverse assemble or otherwise attempt to discover any source
          code, sell, assign, sublicense, or otherwise transfer any right in the
          Software. Any rights not expressly granted herein are reserved by
          Superchief Gallery NFT.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          The Superchief Gallery NFT name and logos are trademarks and service marks of
          Superchief Gallery NFT Labs, Inc. (collectively the “Superchief Trademarks”).
          Other company, product, and service names and logos used and displayed
          via the Platform may be trademarks or service marks of their
          respective owners who may or may not endorse or be affiliated with or
          connected to Superchief Gallery NFT. Nothing in this Terms of Service or the
          Platform should be construed as granting, by implication, estoppel, or
          otherwise, any license or right to use any of Superchief Gallery NFT Trademarks
          displayed on the Platform, without our prior written permission in
          each instance. All goodwill generated from the use of Superchief Gallery NFT
          Trademarks will inure to our exclusive benefit.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Third Party Material: Under no circumstances will Superchief Gallery NFT be liable
          in any way for any content or materials of any third parties
          (including users), including, but not limited to, for any errors or
          omissions in any content, or for any loss or damage of any kind
          incurred as a result of the use of any such content. You acknowledge
          that Superchief Gallery NFT does not pre-screen content, but that Superchief Gallery NFT and
          its designees will have the right (but not the obligation) in their
          sole discretion to refuse or remove any content that is available via
          the Platform. Without limiting the foregoing, Superchief Gallery NFT and its
          designees will have the right to remove any content that violates
          these Terms of Service or is deemed by Platform, in its sole
          discretion, to be otherwise objectionable. You agree that you must
          evaluate, and bear all risks associated with, the use of any content
          and the purchase of any Digital Artwork, including any reliance on the
          accuracy, completeness, or usefulness of such content.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          User Content Transmitted Through the Platform: With respect to the
          content, Digital Artwork, or other materials you upload through the
          Platform or share with other users or recipients (collectively, “User
          Content”), you represent and warrant that you own all right, title and
          interest in and to such User Content, including, without limitation,
          all copyrights and rights of publicity contained therein. By uploading
          any User Content you hereby grant and will grant Superchief Gallery NFT and its
          affiliated companies a nonexclusive, worldwide, royalty free, fully
          paid up, transferable, sublicensable, perpetual, irrevocable license
          to copy, display, upload, perform, distribute, store, modify and
          otherwise use your User Content in connection with the operation of
          the Platform or the promotion, advertising or marketing thereof in any
          form, medium or technology now known or later developed.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Any questions, comments, suggestions, ideas, feedback or other
          information about the Platform (“Submissions”), provided by you to
          Superchief Gallery NFT are non-confidential and Superchief Gallery NFT will be entitled to the
          unrestricted use and dissemination of these Submissions for any
          purpose, commercial or otherwise, without acknowledgment or
          compensation to you.{' '}
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Superchief Gallery NFT may preserve content and may also disclose content if
          required to do so by law or in the good faith belief that such
          preservation or disclosure is reasonably necessary to: (a) comply with
          legal process, applicable laws or government requests; (b) enforce
          these Terms of Service; (c) respond to claims that any content
          violates the rights of third parties; or (d) protect the rights,
          property, or personal safety of Superchief Gallery NFT, its users and the public.
          You understand that the technical processing and transmission of the
          Platform, including your content, may involve (a) transmissions over
          various networks; and (b) changes to conform and adapt to technical
          requirements of connecting networks or devices.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Copyright Complaints: Superchief Gallery NFT respects the intellectual property of
          others, and we ask our users to do the same. If you believe that your
          work has been copied in a way that constitutes copyright infringement,
          or that your intellectual property rights have been otherwise
          violated, you should notify Superchief Gallery NFT of your infringement claim in
          accordance with the procedure set forth below.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Superchief Gallery NFT will process and investigate notices of alleged
          infringement and will take appropriate actions under the Digital
          Millennium Copyright Act (“DMCA”) and other applicable intellectual
          property laws with respect to any alleged or actual infringement. A
          notification of claimed copyright infringement should be emailed to
          Superchief’s Copyright Agent trust@withSuperchief.com (Subject line:
          “DMCA Takedown Request”).
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          To be effective, the notification must be in writing and contain the
          following information:
        </Typography>
        <ul>
          <Typography color="primary" component="li" variant="body2">
            an electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright or other intellectual
            property interest;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            an electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright or other intellectual
            property interest;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            a description of where the material that you claim is infringing is
            located on the Platform, with enough detail that we may find it on
            the Platform;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            your address, telephone number, and email address;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            a statement by you that you have a good faith belief that the
            disputed use is not authorized by the copyright or intellectual
            property owner, its agent, or the law;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            a statement by you, made under penalty of perjury, that the above
            information in your Notice is accurate and that you are the
            copyright or intellectual property owner or authorized to act on the
            copyright or intellectual property owner’s behalf.
          </Typography>
        </ul>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Counter-Notice: If you believe your User Content that was removed (or
          to which access was disabled) is not infringing, or that you have the
          authorization from the copyright owner, the copyright owner’s agent,
          or pursuant to the law, to upload and use the content in your User
          Content, you may send a written counter-notice containing the
          following information to the Copyright Agent:
        </Typography>
        <ul>
          <Typography color="primary" component="li" variant="body2">
            your physical or electronic signature;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            identification of the content that has been removed or to which
            access has been disabled and the location at which the content
            appeared before it was removed or disabled;
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            a statement that you have a good faith belief that the content was
            removed or disabled as a result of mistake or a misidentification of
            the content; and
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            your name, address, telephone number, and email address, a statement
            that you consent to the jurisdiction of the federal court located
            within Northern District of California and a statement that you will
            accept service of process from the person who provided notification
            of the alleged infringement.
          </Typography>
        </ul>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          If a counter-notice is received by the Copyright Agent, Superchief Gallery NFT
          will send a copy of the counter-notice to the original complaining
          party informing that person that it may replace the removed content or
          cease disabling it in 10 business days. Unless the copyright owner
          files an action seeking a court order against the content provider,
          member or user, the removed content may be replaced, or access to it
          restored, in 10 to 14 business days or more after receipt of the
          counter-notice, at our sole discretion.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Repeat Infringer Policy: In accordance with the DMCA and other
          applicable law, Superchief Gallery NFT has adopted a policy of terminating, in
          appropriate circumstances and at Superchief Gallery NFT's sole discretion, Users
          who are deemed to be repeat infringers. Superchief Gallery NFT may also at its
          sole discretion limit access to the Platform and/or terminate the
          memberships of any users who infringe any intellectual property rights
          of others, whether or not there is any repeat infringement.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          User Agrees to Cooperate with Superchief Gallery NFT
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Creators expressly agree to refund to the Collector and/or Superchief Gallery NFT
          the entire portion of Fees received from the sale of a Digital Artwork
          that was subsequently removed from the Site pursuant to an effective
          DMCA request to which the Creator failed to timely submit an effective
          DMCA Counternotification. Superchief Gallery NFT will not be held liable to any
          User for removing allegedly infringing works from the Platform or
          otherwise fulfilling its legal obligations under the DMCA.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Creators, Collectors, and all Users expressly agree to cooperate and
          timely respond to Superchief Gallery NFT’s investigations, requests, and inquiries
          related to DMCA disputes or allegations of infringement. Users agree
          to initiate a “burn” transaction upon Superchief Gallery NFT’s request for Digital
          Artwork that have been permanently removed from the Superchief Gallery NFT
          marketplace pursuant to a valid DMCA Take-Down Notice, or that are
          otherwise alleged to be infringing.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          What fees does Superchief Gallery NFT charge?
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Auction. The terms and mechanics of the Auctions are set forth in our
          Help Center and incorporated into these Terms.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Fees. The Fees for an initial sale of Digital Artwork on Superchief Gallery NFT is
          as follows:
        </Typography>
        <ul>
          <Typography color="primary" component="li" variant="body2">
            Creators receive 85% of the total sale price of an Initial Sale.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            oundation collects 15% of the total sale price of an Initial Sale.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            You agree and understand that all fees, commissions, and royalties
            are transferred, processed, or initiated directly through one or
            more of the smart contracts on the Ethereum blockchain network.
          </Typography>
        </ul>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          The Fees for a secondary sale of Digital Artwork on Superchief Gallery NFT is as
          follows:
        </Typography>
        <ul>
          <Typography color="primary" component="li" variant="body2">
            Seller receives 85% of the total sale price of a Secondary Sale.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            Original Creator receives 10% of the total sale price of a Secondary
            Sale.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            Superchief Gallery NFT collects 5% of the total sale price of a Secondary Sale.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            You agree and understand that all fees, commissions, and royalties
            are transferred, processed, or initiated directly through one or
            more of the smart contracts on the Ethereum blockchain network.
          </Typography>
        </ul>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Superchief Gallery NFT does not generally collect any fees, commissions, or
          royalties for transactions occurring outside of Superchief Gallery NFT. Users
          irrevocably releases, acquits, and forever discharges Superchief Gallery NFT and
          its subsidiaries, affiliates, officers, and successors of any
          liability for royalties, fines, or fees not received from any
          off-market transaction.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          All transactions on Superchief Gallery NFT, including without limitation minting,
          tokenizing, bidding, listing, offering, purchasing, or confirming, are
          facilitated by smart contracts existing on the Ethereum network. The
          Ethereum network requires the payment of a transaction fee (a “Gas
          fee”) for every transaction that occurs on the Ethereum network, and
          thus every transaction occurring on Superchief Gallery NFT. The value of the Gas
          Fee changes, often unpredictably, and is entirely outside of the
          control of Superchief Gallery NFT. The User acknowledges that under no
          circumstances will a contract, agreement, offer, sale, bid, or other
          transaction on Superchief Gallery NFT be invalidated, revocable, retractable, or
          otherwise unenforceable on the basis that the Gas Fee for the given
          transaction was unknown, too high, or otherwise unacceptable.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Taxes. Users are responsible to pay any and all sales, use,
          value-added and other taxes, duties, and assessments now or hereafter
          claimed or imposed by any governmental authority, “associated with
          your use of Superchief Gallery NFT (including, without limitation, any taxes that
          may become payable as the result of your ownership, transfer,
          purchase, sale, or creation of any artworks).
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Beta Platforms. Certain features on Superchief Gallery NFT may be offered while
          still in “beta” form (“Beta Platforms”). Superchief Gallery NFT will utilize best
          efforts to identify the Beta Platforms by labeling on its Platform. By
          accepting these Terms or using the Beta Platforms, you understand and
          acknowledge that the Beta Platforms are being provided as a “Beta”
          version and made available on an “As Is” or “As Available” basis. The
          Beta Platforms may contain bugs, errors, and other problems. YOU
          ASSUME ALL RISKS AND ALL COSTS ASSOCIATED WITH YOUR USE OF THE BETA
          PLATFORMS, INCLUDING, WITHOUT LIMITATION, ANY INTERNET ACCESS FEES,
          BACK-UP EXPENSES, COSTS INCURRED FOR THE USE OF YOUR DEVICE AND
          PERIPHERALS, AND ANY DAMAGE TO ANY EQUIPMENT, SOFTWARE, INFORMATION OR
          DATA. In addition, we are not obligated to provide any maintenance,
          technical, or other support for the Beta Platforms.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          What about my privacy?
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Our privacy policy is a part of these Terms. Please review the
          Superchief Gallery NFT Privacy Policy, which also governs the Platform and informs
          Users of our data collection practices.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          Other Legal Terms
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Indemnity and Release: You agree to release, indemnify and hold
          Superchief Gallery NFT and its affiliates and their officers, employees, directors
          and agents (collectively, “Indemnitees”) harmless from any from any
          and all losses, damages, expenses, including reasonable attorneys’
          fees, rights, claims, actions of any kind and injury (including death)
          arising out of or relating to your use of the Platform, any User
          Content, your connection to the Platform, your violation of these
          Terms of Service or your violation of any rights of another.
          Notwithstanding the foregoing, you will have no obligation to
          indemnify or hold harmless any Indemnitee from or against any
          liability, losses, damages or expenses incurred as a result of any
          action or inaction of such Indemnitee. If you are a California
          resident, you waive California Civil Code Section 1542, which says: “A
          general release does not extend to claims that the creditor or
          releasing party does not know or suspect to exist in his or her favor
          at the time of executing the release and that, if known by him or her,
          would have materially affected his or her settlement with the debtor
          or released party.” If you are a resident of another jurisdiction, you
          waive any comparable statute or doctrine.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Disclaimer of Warranties: Platform transactions, including but not
          limited to primary sales, secondary market sales, listings, offers,
          bids, acceptances, and other operations utilize experimental smart
          contract and blockchain technology, including non-fungible tokens,
          cryptocurrencies, consensus algorithms, and decentralized or
          peer-to-peer networks and systems. Users acknowledge and agree that
          such technologies are experimental, speculative, and inherently risky
          and may be subject to bugs, malfunctions, timing errors, hacking and
          theft, or changes to the protocol rules of the Ethereum blockchain
          (i.e., "forks"), which can adversely affect the smart contracts and
          may expose you to a risk of total loss, forfeiture of your digital
          currency or Digital Artwork, or lost opportunities to buy or sell
          Digital Artwork. YOUR USE OF THE PLATFORM IS AT YOUR SOLE RISK. THE
          PLATFORM IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.
          Superchief Gallery NFT EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
          EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO THE
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, TITLE AND NON-INFRINGEMENT.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Superchief Gallery NFT MAKES NO WARRANTY THAT (I) THE PLATFORM WILL MEET YOUR
          REQUIREMENTS, (II) THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE,
          OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF
          THE PLATFORM WILL BE ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY
          PRODUCTS, PLATFORMS, INFORMATION, OR OTHER MATERIAL PURCHASED OR
          OBTAINED BY YOU THROUGH THE PLATFORM WILL MEET YOUR EXPECTATIONS.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Limitation of Liability: YOU EXPRESSLY UNDERSTAND AND AGREE THAT
          Superchief Gallery NFT WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS
          INCLUDING BUT NOT LIMITED TO, LOSS IN VALUE OF ANY DIGITAL ARTWORK,
          DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES
          (EVEN IF Superchief Gallery NFT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES), WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
          LIABILITY OR OTHERWISE, RESULTING FROM: (I) THE USE OR THE INABILITY
          TO USE THE PLATFORM; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS
          AND PLATFORMS RESULTING FROM ANY DIGITAL ARTWORK, GOODS, DATA,
          INFORMATION OR PLATFORMS PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR
          TRANSACTIONS ENTERED INTO THROUGH OR FROM THE PLATFORM; (III)
          UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA;
          (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE PLATFORM; OR (V)
          ANY OTHER MATTER RELATING TO THE PLATFORM. IN NO EVENT WILL
          Superchief Gallery NFT’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES
          OF ACTION EXCEED THE AMOUNT YOU HAVE PAID Superchief Gallery NFT IN THE LAST SIX
          (6) MONTHS, OR, IF GREATER, ONE HUNDRED DOLLARS ($100).
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OR EXCLUSION OF CERTAIN
          WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL
          OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS
          SET FORTH ABOVE MAY NOT APPLY TO YOU OR BE ENFORCEABLE WITH RESPECT TO
          YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE PLATFORM OR WITH
          THESE TERMS OF PLATFORM, YOUR SOLE AND EXCLUSIVE REMEDY IS TO
          DISCONTINUE USE OF THE PLATFORM.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          IF YOU ARE A USER FROM NEW JERSEY, THE FOREGOING SECTIONS TITLED
          “DISCLAIMER OF WARRANTIES” AND “LIMITATION OF LIABILITY” ARE INTENDED
          TO BE ONLY AS BROAD AS IS PERMITTED UNDER THE LAWS OF THE STATE OF NEW
          JERSEY. IF ANY PORTION OF THESE SECTIONS IS HELD TO BE INVALID UNDER
          THE LAWS OF THE STATE OF NEW JERSEY, THE INVALIDITY OF SUCH PORTION
          SHALL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS OF THE
          APPLICABLE SECTIONS.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          Here are our termination rights.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          You agree that Superchief Gallery NFT, in its sole discretion, may suspend or
          terminate your account (or any part thereof) or use of the Platform
          and remove and discard any content within the Platform, for any
          reason, including, without limitation, for lack of use or if
          Superchief Gallery NFT believes that you have violated or acted inconsistently
          with the letter or spirit of these Terms of Service. Any suspected
          fraudulent, abusive or illegal activity that may be grounds for
          termination of your use of Platform, may be referred to appropriate
          law enforcement authorities. Superchief Gallery NFT may also in its sole
          discretion and at any time discontinue providing the Platform, or any
          part thereof, with or without notice. You agree that any termination
          of your access to the Platform under any provision of this Terms of
          Service may be effected without prior notice, and acknowledge and
          agree that Superchief Gallery NFT may immediately deactivate or delete your
          account and all related information and files in your account and/or
          bar any further access to such files or the Platform. Further, you
          agree that Superchief Gallery NFT will not be liable to you or any third party for
          any termination of your access to the Platform.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          We do not get involved with User disputes.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          You agree that you are solely responsible for your interactions with
          any other Users in connection with the Platform and Superchief Gallery NFT will
          have no liability or responsibility with respect thereto. Superchief Gallery NFT
          reserves the right, but has no obligation, to become involved in any
          way with disputes between you and any other user of the Platform.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          General Legal Terms
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          These Terms of Service constitute the entire agreement between you and
          Superchief Gallery NFT and govern your use of the Platform, superseding any prior
          agreements between you and Superchief Gallery NFT with respect to the Platform.
          You also may be subject to additional terms and conditions that may
          apply when you use affiliate or third party services, third party
          content or third party software. These Terms of Service will be
          governed by the laws of the State of California without regard to its
          conflict of law provisions. With respect to any disputes or claims not
          subject to arbitration, as set forth above, you and Superchief Gallery NFT agree
          to submit to the personal and exclusive jurisdiction of the state and
          federal courts located within San Francisco County, California. The
          failure of Superchief Gallery NFT to exercise or enforce any right or provision of
          these Terms of Service will not constitute a waiver of such right or
          provision. If any provision of these Terms of Service is found by a
          court of competent jurisdiction to be invalid, the parties
          nevertheless agree that the court should endeavor to give effect to
          the parties’ intentions as reflected in the provision, and the other
          provisions of these Terms of Service remain in full force and effect.
          You agree that regardless of any statute or law to the contrary, any
          claim or cause of action arising out of or related to use of the
          Platform or these Terms of Service must be filed within one (1) year
          after such claim or cause of action arose or be forever barred. A
          printed version of this agreement and of any notice given in
          electronic form will be admissible in judicial or administrative
          proceedings based upon or relating to this agreement to the same
          extent and subject to the same conditions as other business documents
          and records originally generated and maintained in printed form. You
          may not assign this Terms of Service without the prior written consent
          of Superchief Gallery NFT, but Superchief Gallery NFT may assign or transfer this Terms of
          Service, in whole or in part, without restriction. The section titles
          in these Terms of Service are for convenience only and have no legal
          or contractual effect. Notices to you may be made via either email or
          regular mail. The Platform may also provide notices to you of changes
          to these Terms of Service or other matters by displaying notices or
          links to notices generally on the Platform.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography color="primary" variant="h5">
          Your Privacy{' '}
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Under California Civil Code Section 1789.3, users of the Platform from
          California are entitled to the following specific consumer rights
          notice: The Complaint Assistance Unit of the Division of Consumer
          Platforms of the California Department of Consumer Affairs may be
          contacted in writing at 1625 North Market Blvd., Suite N 112,
          Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800)
          952-5210. You may contact us at Superchief Gallery NFT, Inc., 11420 Santa Monica
          Blvd, PO Box 252111, Los Angeles, CA 90025, or at (657) 229-1518.
        </Typography>
        <Typography
          color="primary"
          className={classes.paragraph}
          variant="body2"
        >
          Dispute Resolution By Binding Arbitration: PLEASE READ THIS SECTION
          CAREFULLY AS IT AFFECTS YOUR RIGHTS.
        </Typography>
        <ul>
          <Typography color="primary" component="li" variant="body2">
            Agreement to Arbitrate This Dispute Resolution by Binding
            Arbitration section is referred to in this Terms of Service as the
            “Arbitration Agreement.” You agree that any and all disputes or
            claims that have arisen or may arise between you and Superchief Gallery NFT,
            whether arising out of or relating to this Terms of Service
            (including any alleged breach thereof), the Platforms, any
            advertising, any aspect of the relationship or transactions between
            us, shall be resolved exclusively through final and binding
            arbitration, rather than a court, in accordance with the terms of
            this Arbitration Agreement, except that you may assert individual
            claims in small claims court, if your claims qualify. Further, this
            Arbitration Agreement does not preclude you from bringing issues to
            the attention of federal, state, or local agencies, and such
            agencies can, if the law allows, seek relief against us on your
            behalf. You agree that, by entering into this Terms of Service, you
            and Superchief Gallery NFT are each waiving the right to a trial by jury or to
            participate in a class action. Your rights will be determined by a
            neutral arbitrator, not a judge or jury. The Federal Arbitration Act
            governs the interpretation and enforcement of this Arbitration
            Agreement.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            Prohibition of Class and Representative Actions and
            Non-Individualized Relief YOU AND SUPERCHIEF GALLERY NFT AGREE THAT EACH OF US
            MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND
            NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
            REPRESENTATIVE ACTION OR PROCEEDING. UNLESS BOTH YOU AND SUPERCHIEF GALLERY NFT
            AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE
            THAN ONE PERSON’S OR PARTY’S CLAIMS AND MAY NOT OTHERWISE PRESIDE
            OVER ANY FORM OF A CONSOLIDATED, REPRESENTATIVE, OR CLASS
            PROCEEDING. ALSO, THE ARBITRATOR MAY AWARD RELIEF (INCLUDING
            MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE
            INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO
            PROVIDE RELIEF NECESSITATED BY THAT PARTY’S INDIVIDUAL CLAIM(S),
            EXCEPT THAT YOU MAY PURSUE A CLAIM FOR AND THE ARBITRATOR MAY AWARD
            PUBLIC INJUNCTIVE RELIEF UNDER APPLICABLE LAW TO THE EXTENT REQUIRED
            FOR THE ENFORCEABILITY OF THIS PROVISION.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            Pre-Arbitration Dispute Resolution Superchief Gallery NFT is always interested
            in resolving disputes amicably and efficiently, and most customer
            concerns can be resolved quickly and to the customer’s satisfaction
            by emailing customer support at support@withSuperchief.com. If such
            efforts prove unsuccessful, a party who intends to seek arbitration
            must first send to the other, by certified mail, a written Notice of
            Dispute (“Notice”). The Notice to Superchief Gallery NFT should be sent to 11420
            Santa Monica Blvd, PO Box 252111, Los Angeles, CA 90025 (“Notice
            Address”). The Notice must (i) describe the nature and basis of the
            claim or dispute and (ii) set forth the specific relief sought. If
            Superchief Gallery NFT and you do not resolve the claim within sixty (60)
            calendar days after the Notice is received, you or Superchief Gallery NFT may
            commence an arbitration proceeding. During the arbitration, the
            amount of any settlement offer made by Superchief Gallery NFT or you shall not
            be disclosed to the arbitrator until after the arbitrator determines
            the amount, if any, to which you or Superchief Gallery NFT is entitled.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            Arbitration Procedures Arbitration will be conducted by a neutral
            arbitrator in accordance with the American Arbitration Association’s
            (“AAA”) rules and procedures, including the AAA’s Consumer
            Arbitration Rules (collectively, the “AAA Rules”), as modified by
            this Arbitration Agreement. For information on the AAA, please visit
            its website, http://www.adr.org. Information about the AAA Rules and
            fees for consumer disputes can be found at the AAA’s consumer
            arbitration page, http://www.adr.org/ as may be updated from time to
            time. If there is any inconsistency between any term of the AAA
            Rules and any term of this Arbitration Agreement, the applicable
            terms of this Arbitration Agreement will control unless the
            arbitrator determines that the application of the inconsistent
            Arbitration Agreement terms would not result in a fundamentally fair
            arbitration. The arbitrator must also follow the provisions of these
            Terms of Service as a court would. All issues are for the arbitrator
            to decide, including, but not limited to, issues relating to the
            scope, enforceability, and arbitrability of this Arbitration
            Agreement. Although arbitration proceedings are usually simpler and
            more streamlined than trials and other judicial proceedings, the
            arbitrator can award the same damages and relief on an individual
            basis that a court can award to an individual under the Terms of
            Service and applicable law. Decisions by the arbitrator are
            enforceable in court and may be overturned by a court only for very
            limited reasons. Unless Superchief Gallery NFT and you agree otherwise, any
            arbitration hearings will take place in a reasonably convenient
            location for both parties with due consideration of their ability to
            travel and other pertinent circumstances. If the parties are unable
            to agree on a location, the determination shall be made by AAA. If
            your claim is for $10,000 or less, Superchief Gallery NFT agrees that you may
            choose whether the arbitration will be conducted solely on the basis
            of documents submitted to the arbitrator, through a telephonic
            hearing, or by an in-person hearing as established by the AAA Rules.
            If your claim exceeds $10,000, the right to a hearing will be
            determined by the AAA Rules. Regardless of the manner in which the
            arbitration is conducted, the arbitrator shall issue a reasoned
            written decision sufficient to explain the essential findings and
            conclusions on which the award is based.
          </Typography>
          <Typography color="primary" component="li" variant="body2">
            Costs of Arbitration Payment of all filing, administration, and
            arbitrator fees (collectively, the “Arbitration Fees”) will be
            governed by the AAA Rules, unless otherwise provided in this
            Arbitration Agreement. If the value of the relief sought is $75,000
            or less, at your request, Superchief Gallery NFT will pay all Arbitration Fees.
            If the value of relief sought is more than $75,000 and you are able
            to demonstrate to the arbitrator that you are economically unable to
            pay your portion of the Arbitration Fees or if the arbitrator
            otherwise determines for any reason that you should not be required
            to pay your portion of the Arbitration Fees, Superchief Gallery NFT will pay
            your portion of such fees. In addition, if you demonstrate to the
            arbitrator that the costs of arbitration will be prohibitive as
            compared to the costs of litigation, Superchief Gallery NFT will pay as much of
            the Arbitration Fees as the arbitrator deems necessary to prevent
            the arbitration from being cost-prohibitive. Any payment of
            attorneys’ fees will be governed by the AAA Rules.
          </Typography>
          <Typography color="primary" component="li">
            Confidentiality
          </Typography>
          <Typography color="primary" variant="body2">
            All aspects of the arbitration proceeding, and any ruling, decision,
            or award by the arbitrator, will be strictly confidential for the
            benefit of all parties.
          </Typography>
          <Typography color="primary" component="li">
            Severability
          </Typography>
          <Typography color="primary" variant="body2">
            If a court or the arbitrator decides that any term or provision of
            this Arbitration Agreement (other than the subsection (b) titled
            “Prohibition of Class and Representative Actions and
            Non-Individualized Relief” above) is invalid or unenforceable, the
            parties agree to replace such term or provision with a term or
            provision that is valid and enforceable and that comes closest to
            expressing the intention of the invalid or unenforceable term or
            provision, and this Arbitration Agreement shall be enforceable as so
            modified. If a court or the arbitrator decides that any of the
            provisions of subsection (b) above titled “Prohibition of Class and
            Representative Actions and Non-Individualized Relief” are invalid or
            unenforceable, then the entirety of this Arbitration Agreement shall
            be null and void, unless such provisions are deemed to be invalid or
            unenforceable solely with respect to claims for public injunctive
            relief. The remainder of the Terms of Service will continue to
            apply.
          </Typography>
          <Typography color="primary" component="li">
            Future Changes to Arbitration Agreement
          </Typography>
          <Typography color="primary" variant="body2">
            Notwithstanding any provision in this Terms of Service to the
            contrary, Superchief Gallery NFT agrees that if it makes any future change to
            this Arbitration Agreement (other than a change to the Notice
            Address) while you are a user of the Platforms, you may reject any
            such change by sending Superchief Gallery NFT written notice within thirty (30)
            calendar days of the change to the Notice Address provided above. By
            rejecting any future change, you are agreeing that you will
            arbitrate any dispute between us in accordance with the language of
            this Arbitration Agreement as of the date you first accepted these
            Terms of Service (or accepted any subsequent changes to these Terms
            of Service).
          </Typography>
        </ul>
      </Grid>
    </Grid>
  )
}

export default Terms
