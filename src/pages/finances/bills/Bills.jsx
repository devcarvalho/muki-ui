import { Typography, Box, styled, Grid, IconButton, Checkbox } from "@mui/material";
import { ReactComponent as CreditCard } from "../../../assets/icons/credit-card.svg";
import fruit from "../../../assets/icons/fruit.png";

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { ReactComponent as MoreHorizontal } from '../../../assets/icons/more-horizontal.svg';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Bills() {
  const Wrapper = styled("div")`
    padding: 0 24px;
  `;

  const Wallet = styled("div")`
    margin-top: 49px;
    display: flex;
    align-items: center;
    gap: 12px;
  `;

  const WalletIcon = styled("div")`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #ffcf53 0%, #ff9900 100%);
    border-radius: 24px;
  `;

  const CreditCardIcon = styled(CreditCard)`
    width: 16px;
    height: 16px;
    path {
      stroke: ${(props) => props.color || "#fff"};
    }
  `;

  const Heading = styled("div")`
    margin-top: 31px;
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const BillsList = styled("div")`
    margin-top: 26px;
  `;

  const Bill = styled("div")`
    display: flex;
    align-items: center;
  `;

  const DayOutingDescription = styled("div")`
    margin-left: 5px;
  `;

  const LimitContainer = styled("div")`
    height: 72px;
    max-width: 100%;
    background: #f7f7f7;
    border-radius: 10px;
    margin-top: 25px;
    display: flex;
    padding: 16px 16px 0 16px;
  `;

  const ExpenditureIcon = styled("div")`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 24px;
  `;

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    width: "100%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: "linear-gradient(210.75deg, #9C2CF3 -340.7%, #3A49F9 84.82%)"
    },
  }));

  const billsToPay = [
    {
      description: "Aluguel",
      amount: "4.000,00",
      dateTime: "15/01/2023 17:00",
      paid: true
    },
    {
      description: "Condomínio",
      amount: "800,00",
      dateTime: "15/01/2023 17:00",
      paid: true
    },
    {
      description: "Enel",
      amount: "345,20",
      dateTime: "15/01/2023 17:00",
      paid: false
    },
    {
      description: "Comgás",
      amount: "106,98",
      dateTime: "15/01/2023 17:00",
      paid: true
    }
  ]

  return (
    <Wrapper>
      <Wallet>
        <WalletIcon>
          <CreditCardIcon />
        </WalletIcon>
        <Box>
          <Typography variant="subtitle1">Carteira</Typography>
          <Typography variant="body3">R$ 16.874,97</Typography>
        </Box>
      </Wallet>
      <Heading>
        <Typography variant="h1">Todas as Contas</Typography>
      </Heading>

      <LimitContainer>
        <ExpenditureIcon>
          <img src={fruit} alt="fruit" />
        </ExpenditureIcon>
        <Box sx={{ width: "80%", marginLeft: "12px" }}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "4px",
            }}
          >
            <Box>
              <Typography variant="body3">Pago este mês</Typography>
              <Typography variant="body1" fontWeight={600} marginTop="10px">
                R$ 2.400,00
              </Typography>
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <IconButton sx={{ padding: "0" }}>
                <MoreHorizontal />
              </IconButton>
              <Typography variant="body1" fontWeight={600}>
                R$ 20.400,00
              </Typography>
            </Box>
          </Grid>
          <BorderLinearProgress variant="determinate" value={30} />
        </Box>
      </LimitContainer>

      <BillsList>
        {billsToPay.map(bill => <Bill>
          <Checkbox
            checked={bill.paid}
            icon={<CheckCircleOutlinedIcon fontSize="large" />}
            checkedIcon={<CheckCircleIcon fontSize="large" />}
          />
          <DayOutingDescription>
            <Typography variant="body1" fontWeight={600}>
              {bill.description}
            </Typography>
            <Typography variant="body2">{bill.dateTime}</Typography>
          </DayOutingDescription>
          <Typography
            variant="body3"
            sx={{
              background: "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginLeft: "auto",
            }}
          >
            R$ {bill.amount}
          </Typography>
        </Bill>)}
      </BillsList>
    </Wrapper>
  );
}

export default Bills;
