function Nav_link({ data }: { data: { name: string; link: string } }) {
  return (
    <li>
      <a href={data.link}>{data.name}</a>
    </li>
  );
}

export default Nav_link;
