import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Confirm,
  Button,
  Loader,
  Icon,
  Header,
  Table,
  Rating,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Heading = ({ heading }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteHeading();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);

  const close = () => setConfirm(false);

  const deleteHeading = async () => {
    const headingId = router.query.id;
    try {
      const deleted = await fetch(
        `http://localhost:3000/api/headings/${headingId}`,
        {
          method: "Delete",
        }
      );

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div className={styles.heading_container}>
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <Link href="/">
            <Button style={{ float: "right" }} basic color="blue" animated>
              <Button.Content visible>Home</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          </Link>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Id</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Sub-Title</Table.HeaderCell>
                <Table.HeaderCell>About Title</Table.HeaderCell>
                <Table.HeaderCell>About Description</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h2" textAlign="center">
                    {1}
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>{heading.title}</Table.Cell>
                <Table.Cell>{heading.subTitle}</Table.Cell>
                <Table.Cell>{heading.aboutTitle}</Table.Cell>
                <Table.Cell>{heading.aboutDescription}</Table.Cell>
                <Table.Cell textAlign="right">
                  <Link href={`${heading._id}/editHeading`}>
                    <Button color="blue">Edit</Button>
                  </Link>
                  <Button color="red" onClick={open}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
};

Heading.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/headings/${id}`);
  const { data } = await res.json();

  return { heading: data };
};

export default Heading;
