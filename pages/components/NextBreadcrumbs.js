import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React from 'react';


const _defaultGetTextGenerator = () => null;
const _defaultGetDefaultTextGenerator = path => path;

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = pathStr => {
  const pathWithoutQuery = pathStr.split("?")[0];
  return pathWithoutQuery.split("/")
                         .filter(v => v.length > 0);
}

export default function NextBreadcrumbs({
  getTextGenerator=_defaultGetTextGenerator,
  getDefaultTextGenerator=_defaultGetDefaultTextGenerator
}) {
  const router = useRouter();

  const breadcrumbs = React.useMemo(function generateBreadcrumbs() {
    const asPathNestedRoutes = generatePathParts(router.asPath);
    const pathnameNestedRoutes = generatePathParts(router.pathname);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // Pull out and convert "[post_id]" into "post_id"
      const param = pathnameNestedRoutes[idx].replace("[", "").replace("]", "");

      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return {
        href, textGenerator: getTextGenerator(param, router.query),
        text: getDefaultTextGenerator(subpath, href)
      }; 
    })

    return [{ href: "/", text: "Home" }, ...crumblist];
  }, [router.asPath, router.pathname, router.query, getTextGenerator, getDefaultTextGenerator]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
}


function Crumb({ text: defaultText, textGenerator, href, last=false }) {

  const [text, setText] = React.useState(defaultText);

  useEffect(() => {
    async function fetchText() {
    if (!Boolean(textGenerator)) { return; }
    const finalText = await textGenerator();
    setText(finalText);
  }}, [textGenerator]);

  if (last) {
    return <Typography color="text.primary">{text}</Typography>
  }

  return (
    <Link underline="hover" color="inherit" href={href}>
      {text}
    </Link>
  );
}